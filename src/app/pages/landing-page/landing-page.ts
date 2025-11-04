import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/hero/hero";
import { About } from "../../components/about/about";
import { Services } from "../../components/services/services";
import { FooterComponent } from "../../shared/footer/footer";

@Component({
  selector: 'app-landing-page',
  imports: [Navbar, Hero, About, Services, FooterComponent],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css'],
})
export class LandingPage {

}
