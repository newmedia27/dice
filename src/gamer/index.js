export default function Gamer(name, score, winCount) {
    this.name = name;
    this.score = score;
    this.winCount = winCount;
}

Gamer.prototype.getScore = function () {
    return this.score
}
Gamer.prototype.setScore = function (score) {
    this.score = score
}
Gamer.prototype.resetScore = function () {
    this.score = 0
}
