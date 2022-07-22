import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CityService} from "../service/city.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.css']
})
export class ListCityComponent implements OnInit {
  cities: any;
  form = new FormGroup(({
    from: new FormGroup(''),
    to: new FormGroup(''),
  }))

  constructor(private cityService: CityService) {
  }

  ngOnInit(): void {
    this.cityService.getAll().subscribe(cities => {
      console.log(cities)
      this.cities = cities;
    }, error => {
      console.log(error)
    })
  }

  // getAll() {

  // }

  find() {
    const from = this.form.value.to;
    const to = this.form.value.to;
    this.cityService.findByArea(from, to).subscribe((data) => {
      console.log(data);
      this.cities = data
    })
  }

}
