import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent implements OnInit {
  photos: any[] = [];

  constructor( private photosService: PhotosService) {}

  ngOnInit() {
    this.photosService.getPhotos().subscribe((photos: any) => {
      this.photos = photos;
    });
  }


}
