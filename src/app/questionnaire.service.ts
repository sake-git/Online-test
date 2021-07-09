import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Question } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(public http:HttpClient) { }

  getQuestions():Observable<Question[]>{
    console.log("Get Questions called");
    return this.http.get<Question[]>("http://localhost:3000/Questionnaire");
  }
}
