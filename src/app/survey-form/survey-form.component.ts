import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {
  SERVER_URL = "https://ffpktcedbf.execute-api.us-east-1.amazonaws.com/Prod/survey";
  uploadForm: FormGroup;  

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { 
    
  }


  ngOnInit() {
    this.uploadForm = new FormGroup({
      customerFirstName: new FormControl(null,Validators.required),
      customerLastName: new FormControl(null,Validators.required), // same as above but expects null by default
      addressstreet: new FormControl(null),
      addresscity: new FormControl(null),
      addressstate: new FormControl(null),
      addresszip: new FormControl(null),
      contactphone: new FormControl(null),
      contactemail: new FormControl(null),
      Date: new FormControl(null),
        student: new FormControl(null),
        location: this.formBuilder.control(null),
        campus: this.formBuilder.control(null),
        dorm: this.formBuilder.control(null),
        sports: this.formBuilder.control(null),
        atmosphere: this.formBuilder.control(null),
       interest: this.formBuilder.control(null, Validators.required),
       referral: this.formBuilder.control('Likely'),
      // gender: this.formBuilder.control('Male'), // default value setting

      

    });

    
   }

  onSubmit() {
    const formData = new FormData();
    //var n;
    //n = "State=NY&Tel_NO=1234567";
    var test = {  
      "FirstName": this.uploadForm.get('customerFirstName').value,
      "LastName":this.uploadForm.get('customerLastName').value,
      "StreetAddr": this.uploadForm.get('addressstreet').value,
      "City":this.uploadForm.get('addresscity').value,
      "State":this.uploadForm.get('addressstate').value,
      "Zip":this.uploadForm.get('addresszip').value,
      "Tel_No":this.uploadForm.get('contactphone').value,
      "E_mail":this.uploadForm.get('contactemail').value,
      "Dat":this.uploadForm.get('Date').value,
      "Abt_Campus":this.uploadForm.get('student').value,
      "Uni_List":this.uploadForm.get('interest').value,
      "Recommendation":this.uploadForm.get('referral').value,      

    }
    var z;
    z="State="
    var abt_global = "";
    var abt_us = "";
    var  Student =this.uploadForm.get('student').value;
    var Loc =this.uploadForm.get('location').value;
    var campus =this.uploadForm.get('campus').value;
    var dorm =this.uploadForm.get('dorm').value;
    var sports =this.uploadForm.get('sports').value;
    var atmos =this.uploadForm.get('atmosphere').value;
    
    if (Student== null){
      Student = false;
    }
    
    if (Loc== null){
      Loc = false;
    }
    
    if (campus== null){
      campus = false;
    }
    
    if (dorm== null){
      dorm = false;
    }
    
    if (sports== null){
      sports = false;
    }
    
    if (atmos== null){
      atmos = false;
    }
    
    

    if(Student.toString().localeCompare('true') == 0)
    {
      Student = "Student";
    }
    if( Loc.toString().localeCompare('true') == 0)
    {
      Loc = "Location";
    }
    if (campus.toString().localeCompare('true') == 0)
    { campus = "campus";
    }
    if(dorm.toString().localeCompare('true') == 0)
    {
       dorm ="Dorm";
    }
    if(sports.toString().localeCompare('true') == 0) 
    {
      sports = "sports";
    }
    if(atmos.toString().localeCompare('true') == 0)
    {
      atmos = "atmosphere";
    }
        abt_global= abt_us.concat(Student,",",Loc,",",campus,",",dorm,",",sports,",",atmos);



    var res = z.concat(this.uploadForm.get('addressstate').value,
    "&","Tel_NO=",this.uploadForm.get('contactphone').value,
    "&","FirstName=",this.uploadForm.get('customerFirstName').value,
    "&","Lastname=",this.uploadForm.get('customerLastName').value,
    "&","Street_Addr=",this.uploadForm.get('addressstreet').value,
    "&","City=",this.uploadForm.get('addresscity').value,
    "&","Zip=",this.uploadForm.get('addresszip').value,
    "&","E_Mail=",this.uploadForm.get('contactemail').value,
    "&","Dat=",this.uploadForm.get('Date').value,
    "&","Abt_Campus=",abt_global,
    "&","Uni_Ist=",this.uploadForm.get('interest').value,
    "&","Recommendation=",this.uploadForm.get('referral').value);

    formData.append('first_name',this.uploadForm.get('customerFirstName').value);
    formData.append('last_name', this.uploadForm.get('customerLastName').value);
    formData.append('Street_Addr', this.uploadForm.get('addressstreet').value);
    formData.append('City', this.uploadForm.get('addresscity').value);
    formData.append('State', this.uploadForm.get('addressstate').value);
    formData.append('ZIP', this.uploadForm.get('addresszip').value);
    formData.append('Tel_NO', this.uploadForm.get('contactphone').value);
    formData.append('E_Mail', this.uploadForm.get('contactemail').value);
    formData.append('Dat', this.uploadForm.get('Date').value);
    formData.append('Abt_Campus', this.uploadForm.get('student').value);
    formData.append('Uni_Ist', this.uploadForm.get('interest').value);
    formData.append('Recommendation', this.uploadForm.get('referral').value);
    console.log(test);
    //$http.post('/someUrl', data, {headers:{'Content-Type': 'multipart/form-data'}}).then(successCallback, errorCallback);
    
    this.httpClient.post<any>(this.SERVER_URL,test).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );


      
    alert(this.uploadForm.get('student').value);
    //alert(this.uploadForm.get('student').value)
  }
}
