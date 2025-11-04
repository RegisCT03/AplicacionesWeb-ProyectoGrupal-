import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
})
export class Hero {}
