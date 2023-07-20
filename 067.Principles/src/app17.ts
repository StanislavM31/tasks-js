/*
17. Создайте абстрактный класс MusicalInstrument, представляющий музыкальный
инструмент. У класса MusicalInstrument должен быть метод play, который будет
воспроизводить звук инструмента. Создайте классы-наследники Guitar, Piano и
Drums, которые будут представлять гитару, пианино и ударные соответственно.
Реализуйте метод play для каждого класса, воспроизводя соответствующий звук
инструмента. Создайте несколько объектов классов Guitar, Piano и Drums и
вызовите метод play для каждого инструмента.
*/

abstract class MusicalInstrument {
    abstract sound:string;
    abstract play():string;
}
class Guitar extends MusicalInstrument{
    sound: string = 'guitarSound';
    play():string{
        return this.sound;
    }
}
class Piano extends MusicalInstrument{
    sound: string = 'pianoSound';
    play():string{
        return this.sound;
    }
}
class Drums extends MusicalInstrument{
    sound: string = 'drumSound';
    play():string{
        return this.sound;
    }
}
let guitar = new Guitar();
console.log(guitar.play());
let piano = new Piano();
console.log(piano.play());
let drums = new Drums();
console.log(drums.play());
