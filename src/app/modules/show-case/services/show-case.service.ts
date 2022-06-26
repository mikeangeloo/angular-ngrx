import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ShowCaseService {


  constructor() { }

  getDataApi(): Observable<any> {
    //TODO: Aqui podemos hacer http.get('api...')
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://img.seadn.io/files/fae2526a736fd58730a9251714b3aef9.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://img.seadn.io/files/d428f445c8806b7865a4855b07e2ea01.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://img.seadn.io/files/33fd011aceaf3f2023f421d0bab118b4.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://img.seadn.io/files/cf15454e3c705465f627a70f34925c3d.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://img.seadn.io/files/f9947ecb3e95672977dbd819da08c5ff.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://img.seadn.io/files/d6bddc675d6c602a64c4422e62912a84.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://img.seadn.io/files/777a06ce4d5a552d4850adecdd9dd242.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://img.seadn.io/files/1a3eafdec565878646c21c842c8a36c5.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://img.seadn.io/files/33fd011aceaf3f2023f421d0bab118b4.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://img.seadn.io/files/d9a45661b5894130454730956c328d1d.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://img.seadn.io/files/549a531f10368e28f79a94235ff60190.png?fit=max&w=600"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://img.seadn.io/files/9c69a91e427636788700c3316066ada1.png?fit=max&w=600"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }



}
