import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Team } from "src/app/interfaces/app";
import { Secretariat } from "src/app/interfaces/home";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-secretariat",
  templateUrl: "./secretariat.component.html",
  styleUrls: ["./secretariat.component.scss"],
})
export class SecretariatComponent implements OnInit {
  bgImage = 'url("../../../assets/images/teambanner.png';
  title: string = "Secretariat";

  fetching: boolean = false;
  selectedData: Secretariat = {};
  data: Secretariat[] = [];

  team: Team[] = [];

  constructor(private appService: AppService, private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    this.fetchSecretariats();
    this.fetching = false;
  }

  async fetchSecretariats() {
    this.appService.getSecretariats().subscribe((res: Team[]) => {
      this.team = res;
    });
  }

  // Download file
  downloadMyFile(fileUrl: any) {
    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    link.setAttribute("href", fileUrl);
    document.body.appendChild(link);
    console.log(link);

    link.click();
    link.remove();
  }
}
