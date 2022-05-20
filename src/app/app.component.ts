import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Cesar';
  age = 27;
  img = 'https://1.bp.blogspot.com/-xm6qY-hkYOc/X4MbD0L7C1I/AAAAAAABDuo/znkKx2jkf5kRoIte-rQpNb4hfryTUdJTACLcBGAsYHQ/s2048/EjS_hIfUcAA1nGh.jpg';

  btnDisabled = false;

  person = {
    name: 'Cesar',
    age: 27,
    img: 'https://1.bp.blogspot.com/-xm6qY-hkYOc/X4MbD0L7C1I/AAAAAAABDuo/znkKx2jkf5kRoIte-rQpNb4hfryTUdJTACLcBGAsYHQ/s2048/EjS_hIfUcAA1nGh.jpg'
  }

  names: string[] = ['Cesar', 'Alejandro', 'Sebas'];
  newName: string = '';

  products: Product[] = [
    {
      name: 'Poster de kda',
      price: 1000,
      image: 'https://1.bp.blogspot.com/-xm6qY-hkYOc/X4MbD0L7C1I/AAAAAAABDuo/znkKx2jkf5kRoIte-rQpNb4hfryTUdJTACLcBGAsYHQ/s2048/EjS_hIfUcAA1nGh.jpg',
      category: 'kda'
    },
    {
      name: 'Poster de Blackpink',
      price: 800,
      image: 'https://www.dondeir.com/wp-content/uploads/2021/08/blackpink-the-movie-ya-se-estreno-en-mexico-y-aqui-puedes-verla.jpg'
    },
    {
      name: 'Poster Itzy',
      price: 500,
      image: 'https://thebiaslistcom.files.wordpress.com/2022/03/itzy-voltage.jpg?w=640'
    }
  ];

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
