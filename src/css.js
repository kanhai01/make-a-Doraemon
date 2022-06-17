const string = `<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

    .box {
    position: relative;
}
    .head {
    position: absolute;
    height: 210px;
    width: 210px;
    left: 200px;
    top: 100px;
    border-radius: 50%;
    background: #218ec9;
    position: relative;
    animation: move-head 4s linear 0s infinite alternate;
}
    .face {
    position: absolute;
    height: 180px;
    width: 180px;
    border-radius: 50%;
    background: white;
    left: 14px;
    top: 30px;
}
    .eye {
    position: absolute;
    z-index: 1;
    border: 1px solid grey;
    height: 50px;
    width: 45px;
    background: white;
    border-radius: 50%;
    transform: translateX(-4px);
}
    .eye.left {
    left: 60px;
    top: 24px;
}
    .eye.right {
    left: 108px;
    top: 24px;
}
    .eye::before {
    content: '';
    display: block;
    border: 7px solid black;
    height: 6px;
    width: 3px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: -8px;
    top: 14px;
    margin: 0 auto;
    animation: move-eyes 2s linear 0s infinite alternate;
}
    .nose{
    border: 10px solid red;
    height: 26px;
    width: 26px;
    position: absolute;
    left: 90px ;
    top: 60px;
    border-radius: 50%;
    z-index: 2;
    background: white;
}
    .mouth{
    position: relative;
    height: 64px;
    width: 126px;
    border-bottom-left-radius: 64px;
    border-bottom-right-radius: 64px;
    background: #b11635;
    z-index: 4;
    left: 42px;
    top: 130px;
    overflow: hidden;
}
    .mouth>.heart>.right {
    position: absolute;
    height: 70px;
    width: 52px;
    transform: rotate(25deg);
    background: #ca2533;
    border-radius: 50% 50% 0 0;
    left: 54px;
    top: 18px;
}
    .mouth>.heart>.left {
    position: absolute;
    height: 70px;
    width: 52px;
    transform: rotate(-25deg);
    background: #ca2533;
    border-radius: 50% 50% 0 0;
    left:18px;
    top: 18px;
}
    .bread>.line{
    position: absolute;
    height: 56px;
    width: 3px;
    background: black;
    left: 102px;
    top: 80px;
}
    .bread>.line1{
    position: absolute;
    height: 60px;
    width: 2px;
    background: black;
    transform: rotate(100deg);
    left: 58px;
    top: 54px;
}
    .bread>.line2{
    position: absolute;
    height: 56px;
    width: 2px;
    background: black;
    transform: rotate(90deg);
    left: 58px;
    top: 74px;
}
    .bread>.line3{
    position: absolute;
    height: 60px;
    width: 2px;
    background: black;
    transform: rotate(80deg);
    left: 58px;
    top: 90px;
}
    .bread>.line4{
    position: absolute;
    height: 60px;
    width: 2px;
    background: black;
    transform: rotate(80deg);
    left: 148px;
    top: 54px;
}
    .bread>.line5{
    position: absolute;
    height: 56px;
    width: 2px;
    background: black;
    transform: rotate(90deg);
    left: 146px;
    top: 74px;
}
    .bread>.line6{
    position: absolute;
    height: 60px;
    width: 2px;
    background: black;
    transform: rotate(100deg);
    left: 148px;
    top: 90px;
}
    @keyframes move-eyes {
    from{left: -8px}
    to{left: 8px}
}
    @keyframes move-head {
    0%{top: 100px}
    50%{top: 200px}
    100%{top: 100px}
}
</style>`
export default string