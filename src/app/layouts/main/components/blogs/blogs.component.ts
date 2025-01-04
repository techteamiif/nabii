import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Audio, Blog } from "src/app/interfaces/app";
import { AppService } from "src/app/services/app.service";

@Component({
	selector: "app-blogs",
	templateUrl: "./blogs.component.html",
	styleUrls: ["./blogs.component.scss"],
})
export class BlogsComponent implements OnInit {
	bgImage = 'url("../../../assets/images/bg4.png';
	title: string = "News";

	fetching: boolean = false;
	selectedData: Blog = {};
	data: Blog[] = [];
	audios: Audio[] = [];
	searchCompleted: boolean = false;
	searchResult: Blog[] = [];
	sWord: any;

	constructor(
		private appService: AppService,
		private titleService: Title,
		private formBuilder: FormBuilder
	) {
		this.titleService.setTitle(this.title);
	}

	ngOnInit(): void {
		this.fetchData();
	}

	async fetchData() {
		this.fetchBlogs();
		this.fetchAudios();
		this.fetching = false;
	}

	async fetchBlogs() {
		this.appService.getBlogs().subscribe((res: any) => {
			this.data = res;
		});
	}

	async fetchAudios() {
		this.appService.getAudios().subscribe((res: any) => {
			this.audios = res;
		});
	}

	form = this.formBuilder.group({
		searchWord: [
			"",
			{
				validators: [Validators.required],
				updateOn: "change",
			},
		],
	});
}
