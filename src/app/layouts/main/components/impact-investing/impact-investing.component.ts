import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { IifAbout } from "src/app/interfaces/app";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-impact-investing",
  templateUrl: "./impact-investing.component.html",
  styleUrls: ["./impact-investing.component.scss"],
})
export class ImpactInvestingComponent implements OnInit {
  bgImage = 'url("../../../assets/images/city.jpg")';
  welcomeMessageImage = "../../../../../assets/images/mansmile.jpg";
  title: string = "Impact Investing";

  aboutUs: IifAbout = {};

  id = "sXdPKMB5jw66sre2rtWb";

  constructor(private appService: AppService, private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.fetchAboutUs();
  }

  async fetchAboutUs() {
    this.appService.getAboutUs(this.id).subscribe((res: IifAbout) => {
      this.aboutUs = res;
    });
  }
}
