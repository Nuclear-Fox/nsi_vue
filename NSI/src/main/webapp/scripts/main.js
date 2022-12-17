//import axios from "/org/webjars/bower/axios/0.21.1/axios-0.21.1.jar";
//import axios from "axios";



const TableFillVueApp = new Vue ({
  el: '#tableFill',
  data: {
//      list: [
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":3,"prm_fname":"Специализация вагона","vp_zn":"0004","nsi_fname":"лаборатория         "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":20,"prm_fname":"Радиокупе           ","vp_zn":"0009","nsi_fname":"нет                 "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":21,"prm_fname":"Купе-буфет          ","vp_zn":"0009","nsi_fname":"нет                 "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":32,"prm_fname":"Бытовое купе        ","vp_zn":"0001","nsi_fname":"есть                "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":33,"prm_fname":"Аварийный выход     ","vp_zn":"0001","nsi_fname":"есть                "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":34,"prm_fname":"Тип вагона          ","vp_zn":"0072","nsi_fname":"СТ                  "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":35,"prm_fname":"Материал кузова     ","vp_zn":"0002","nsi_fname":"сталь нержавеющая   "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":39,"prm_fname":"Длина вагона        ","vp_zn":"0001","nsi_fname":"25500 мм            "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":44,"prm_fname":"Подъёмник д/инвалид.","vp_zn":"0009","nsi_fname":"не оборудовано      "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":48,"prm_fname":"Вид окраски кузова  ","vp_zn":"0008","nsi_fname":"Дизайн \"РЖД\"        "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":49,"prm_fname":"Краска кузова       ","vp_zn":"0002","nsi_fname":"полиуретановая      "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":51,"prm_fname":"Модель вагона       ","vp_zn":"0298","nsi_fname":"61-919              "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":117,"prm_fname":"Конструкц. скорость ","vp_zn":"0003","nsi_fname":"до 160 км/ч         "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":119,"prm_fname":"Места для гр.-баг","vp_zn":"0009","nsi_fname":"нет                 "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":120,"prm_fname":"Игровая комната     ","vp_zn":"0009","nsi_fname":"нет                 "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":132,"prm_fname":"Возм. трансформации ","vp_zn":"0009","nsi_fname":"нет                 "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":155,"prm_fname":"Прежний тип вагона  ","vp_zn":"0099","nsi_fname":"нет                 "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":158,"prm_fname":"Габарит             ","vp_zn":"0001","nsi_fname":"1-ВМ                "},
//          {"vp_inv":46458,"prm_gr":"0004","prm_x":220,"prm_fname":"Купе для инвалидов","vp_zn":"0009","nsi_fname":"нет                 "}],
      list: [],
      fields: [
          {id:'vp_inv', name:'ИНВ'}, 
          {id:'prm_gr', name:'Код группы характеристики'}, 
          {id:'prm_x', name:'Номер параметра'}, 
          {id:'prm_fname', name:'Полное наименование параметра'}, 
          {id:'vp_zn', name:'Значение характеристики'}, 
          {id:'nsi_fname', name:'Полное наименование'}],
      a: 1
  },
  methods: {
    getList() {
        axios
            .get("http://localhost:8080/server/nsi/getlist")
            .then((value) => {
        this.list = value.data.list;});  
    }
  },
  mounted() {
      this.getList()
  }
 

 
})


const PageVueApp = new Vue ({
  el: '#page',
  data: {
      header:'Справка',
  } 
 
})