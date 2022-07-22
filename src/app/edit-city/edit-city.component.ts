import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Country} from "../model/country";
import {CityService} from "../service/city.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CountryService} from "../service/country.service";

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {

  cityForm: FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(),
    area: new FormControl(),
    gdp: new FormControl(),
    population: new FormControl(),
    description: new FormControl(),
    countryId: new FormControl(),
  })
  obj: any;
  listCountry: Country[] = []


  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute,
              private countryService: CountryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.countryService.getAll().subscribe((data) => {
      console.log(data)
      this.listCountry = data
    })
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })
  }

  findById(id: any) {
    this.cityService.findById(id).subscribe((data) => {
      console.log(data);
      this.cityForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        area: new FormControl(data.area),
        population: new FormControl(data.population),
        gdp: new FormControl(data.gdp),
        description: new FormControl(data.description),
        countryId: new FormControl(data.country)
      })
    })
  }

  save() {
    this.obj = {
      name: this.cityForm.value.name,
      country: {
        id: this.cityForm.value.countryId
      },
      area: this.cityForm.value.area,
      population: this.cityForm.value.population,
      gdp: this.cityForm.value.gdp,
      description: this.cityForm.value.description
    }
    console.log(this.obj)
    this.cityService.updateCity(this.cityForm.value.id,this.obj).subscribe(()=>{
      alert("Thanh cong")
      // @ts-ignore
      $('#exampleModalEdit').modal('hide');
      this.cityForm.reset()
      this.router.navigate(["/cities"])
    }, error => {
      alert("Loi")
      console.log(error)
    })
  }
  }
