// import { response } from 'express';
import axios, { AxiosResponse } from "axios";

interface Token{
  type: string;
  token: string;
  lifetime: number;
  expireTime: Date;
}

class SpotifyService{
  private static instance: SpotifyService|null = null;
  private accessToken: Token|null = null;

  private constructor(){
  }

  public static getInstance(): SpotifyService{
    if(!SpotifyService.instance){
      SpotifyService.instance = new SpotifyService();
    }

    return SpotifyService.instance;
  }
  
  private async refreshToken(): Promise<void>{
    const response: AxiosResponse = await axios.post('https://accounts.spotify.com/api/token',{
      grant_type: 'client_credentials',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET, 
    });

    const now = new Date();

    const tokenData = response.data;
    this.accessToken = {
      token: tokenData.access_token,
      type: tokenData.token_type,
      lifetime: tokenData.expires_in,
      expireTime: new Date(now.getTime()+ (+tokenData.expires_in * 1000)),
    }
  }

  private async getAccessToken(): Promise<Token>{
    const now = new Date();
    if(!this.accessToken || now>this.accessToken.expireTime){
      await this.refreshToken();
    }
    return this.accessToken!;
  }

  private async makeApiCall(endpoint:string, method: 'GET'|'POST'='GET',data?:any): Promise<any>{
    try {
      const token = await this.getAccessToken();
      const headers = {Authorization: `Bearer ${token}`};
      const response: AxiosResponse = await axios.request({
        url: `https://api.spotify.com/v1/${endpoint}`,
        method,
        headers,
        data,
      });
      
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }

  public async searchTracks(query: string): Promise<any>{
    return this.makeApiCall('search','GET',{q:query,type:'track'});
  }
}