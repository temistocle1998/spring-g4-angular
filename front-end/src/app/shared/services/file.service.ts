import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  constructor() { }
  convertImageToBase64String(event: any): Promise<string> {
    return new Promise((resolve) => {
      const files = event.target.files;
      const file = files[0];
      if (files && file) {
        const reader = new FileReader();
        reader.onload = function (readerEvt: any) {
          const binaryString = readerEvt.target.result;
          const photoString = btoa(binaryString);
          resolve(photoString);
        };
        reader.readAsBinaryString(file);
      }
    });
  }

  convertFileToBase64Improved(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onloadend = function () {
        // reader.result contains the Base64 string including metadata (data:[<mime type>];base64,)
        const base64String = reader.result as string;
        resolve(base64String);
      };
      
      reader.onerror = function (error) {
        reject(error);
      };
  
      // Read the file as a data URL (Base64)
      reader.readAsDataURL(file);
    });
  }
  
}