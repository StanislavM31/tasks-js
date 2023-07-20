/*
17. Создайте абстрактный класс MusicalInstrument, представляющий музыкальный
инструмент. У класса MusicalInstrument должен быть метод play, который будет
воспроизводить звук инструмента. Создайте классы-наследники Guitar, Piano и
Drums, которые будут представлять гитару, пианино и ударные соответственно.
Реализуйте метод play для каждого класса, воспроизводя соответствующий звук
инструмента. Создайте несколько объектов классов Guitar, Piano и Drums и
вызовите метод play для каждого инструмента.
*/
class MusicalInstrument {
}
class Guitar extends MusicalInstrument {
    sound = 'guitarSound';
    play() {
        return this.sound;
    }
}
class Piano extends MusicalInstrument {
    sound = 'pianoSound';
    play() {
        return this.sound;
    }
}
class Drums extends MusicalInstrument {
    sound = 'drumSound';
    play() {
        return this.sound;
    }
}
let guitar = new Guitar();
console.log(guitar.play());
let piano = new Piano();
console.log(piano.play());
let drums = new Drums();
console.log(drums.play());
