import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { IifAbout } from "src/app/interfaces/app";
import { AppService } from "src/app/services/app.service";

@Component({
	selector: "app-about-us",
	templateUrl: "./about-us.component.html",
	styleUrls: ["./about-us.component.scss"],
})
export class AboutUsComponent implements OnInit {
	bgImage = 'url("../../../assets/images/city.jpg")';
	welcomeMessageImage = "../../../../../assets/images/mansmile.jpg";
	title: string = "Who We Are";

	fetching: boolean = false;
	aboutUs: IifAbout = {};
	id = "Nu3XMQod9HhJVyejTLl9";

	constructor(private appService: AppService, private titleService: Title) {
		this.titleService.setTitle(this.title);
	}

	ngOnInit(): void {
		this.fetchData();
	}

	async fetchData() {
		this.fetchAboutUs();
		this.fetching = false;
	}

	async fetchAboutUs() {
		this.appService.getAboutUs(this.id).subscribe((res: any) => {
			this.aboutUs = res;
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
