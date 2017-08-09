/**
 * Created by ckatta on 8/9/2017.
 */


function selectOption () {

    var option = document.getElementById('drop_down').value;

    var ele1 = document.getElementById("chartDiv");
    var ele2 = document.getElementById("chartDiv2");
    var ele3 = document.getElementById("myChart1");
    var ele4 = document.getElementById("myChart2");
    var ele5 = document.getElementById("myChart3");
    var ele6 = document.getElementById("myChart4");
    var ele7 = document.getElementById("myChart5");
    var ele8 = document.getElementById("myChart6");
    var ele9 = document.getElementById("myChart7");
    var ele10 = document.getElementById("myChart9");
    var ele11 = document.getElementById("myChart8");
    if(option == 'Auditor') {
        ele1.style.display = '';
        ele2.style.display = 'none';
        ele3.style.display = 'none';
        ele4.style.display = 'none';
        ele5.style.display = 'none';
        ele6.style.display = 'none';
        ele7.style.display = 'none';
        ele8.style.display = 'none';
        ele10.style.display = 'none';
        // ele9.style.display = '';
        ele11.style.display = '';
    } else if (option == 'FTA') {
        ele1.style.display = 'none';
        ele2.style.display = 'none';
        ele3.style.display = '';
        ele4.style.display = '';
        ele5.style.display = '';
        ele6.style.display = '';
        ele7.style.display = '';
        ele8.style.display = '';
        ele10.style.display = '';
        ele9.style.display = 'none';
        ele11.style.display = 'none';
    } else {
        ele1.style.display = 'none';
        ele2.style.display = '';
        ele3.style.display = 'none';
        ele4.style.display = 'none';
        ele5.style.display = 'none';
        ele6.style.display = 'none';
        ele7.style.display = 'none';
        ele8.style.display = 'none';
        ele10.style.display = 'none';
        ele9.style.display = 'none';
        ele11.style.display = 'none';
    }

}