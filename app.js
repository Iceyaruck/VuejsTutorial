var vr = new Vue({ //object
  el: "#vue-app", //ให้ตรงกับหน้า html ที่ประกาศ id ใน <div>
  data: { //ข้อมูลที่จะเอาไปแสดง
    message: "Hello World",
    name: "Aiyaruck Boonlert",
    job: "Programmer",
    age: 24,
    googleLink: 'https://www.google.com',
    countKeyup: 0,
    inputCountKeyup: "",
    countKeyupEnter: 0,
    inputCountKeyupEnter: "",
    phonNumber: '09-2005-1596',
    complain: '12',
    movies: [], //อาเรย์
    watchType: '',
    mostLikeSong: '',
    like: false,
    songsDatas: [
      'วิญญาณ',
      'เราจะทำตามสัญญา',
      'ช่างมัน'
    ],
    songDetails: [{
        name: 'วิญญาณ',
        artist: 'แสตมป์ แอนด์ ปู พงษ์สิทธิ์',
        length: 4.30
      },
      {
        name: 'เราจะทำตามสัญญา',
        artist: 'ประยุทธ์ จันทร์โอชา',
        length: 5.51
      },
      {
        name: 'ช่างมัน',
        artist: 'ค็อกเทล',
        length: 4.12
      },
    ],
    newEmpData: {
      empName: '',
      saraly: null
    },
    oldEmp: [{
        empName: 'สมบุญ คุณเป็นใคร',
        saraly: 12500
      },
      {
        empName: 'สมทรง งงเป็นจริง',
        saraly: 13500
      }
    ]
  },
  methods: { //ฟังก์ชันการทำงาน จัดการกับ data ได้
    getName: function() {
      return this.name
    },
    setName: function(newName) {
      return this.name = newName
    },
    addAge: function() {
      this.age++;
    },
    subtractAge: function() {
      this.age--;
    },
    addcountKeyup: function() {
      this.countKeyup++;
    },
    addcountKeyupEnter: function() {
      this.countKeyupEnter++;
    },
    resetCountKeyup: function() {
      this.countKeyup = 0;
      this.inputCountKeyup = "";
      this.countKeyupEnter = 0;
      this.inputCountKeyupEnter = "";
    },
    checkLike: function() {
      this.like = !this.like;
      console.log(this.like);
    },
    addEmp: function() {
      //ใส่ค่า
      this.oldEmp.push({
        empName: this.newEmpData.empName,
        saraly: this.newEmpData.saraly
      })
      //รีเซตเป็นค่าเริ่มต้น
      this.newEmpData.empName = '';
      this.newEmpData.saraly = null;
    },
    showMessage: function() {
      alert('คำนวณเงินเดือนแล้ว');
    }
  },
  computed: { //จัดการด้านคำนวณ -- ฟังก์ชั่นไมสามารถรับค่าได้ --
    sumSalary: function() {
      var sum = this.oldEmp.reduce(function(value, data) { //reduce ไว้สำหรับจัดการกับอาเรย์ ()
        return value + Number(data.saraly);
      }, 0); // <= เลขศูนย์ตรงนี้คือ ค่าเริ่มต้นของ reduce
      return sum;
    },
    avgSalary: function() {
      var sum = this.oldEmp.reduce(function(value, data) { //reduce ไว้สำหรับจัดการกับอาเรย์ ()
        return value + Number(data.saraly);
      }, 0); // <= เลขศูนย์ตรงนี้คือ ค่าเริ่มต้นของ reduce
      return sum / this.oldEmp.length;
    }
  },
  watch: {
    sumSalary: function() { //หลังจากที่ ฟังก์ชั่น sumSalary() ทำงานเสร็จให้เรียกฟังก์ชั่น showMessage()
      this.showMessage();
    }
  }
})

var post = new Vue({
  el: "#post",
  data: {
    title: 'ตัวอย่าง Multiple Vue',
    detail: 'ในหน้าหนึ่งมี Vue Aplication ได้หลาย App ให้แต่ละ App จัดการแยกกัน.'
  }
});

var comment = new Vue({
  el: "#comment",
  data: {
    text: 'ลองทำดูก็ปวดหัวดีนะ'
  }
});

var likeSystem = new Vue({
  el: "#likeSystem",
  data: {
    like: false
  },
  methods: {
    changeLike: function() {
      this.like = !this.like;
    }
  }
});

Vue.component('iceyahz', { //ชื่อห้ามมีอักษรตัวใหญ่
  data: function() {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">Click: {{count}}</button>'
});

Vue.component('iceyaruck', { //ชื่อห้ามมีอักษรตัวใหญ่
  props: ['title'],
  template: '<h3> {{title}}</h3>'
});

Vue.component('showview', {
  props: {
    name: {
      type: String,
      required: true //ต้องระบุทุกครั้งเมื่อเรียกใช้ showview
    },
    view: {
      type: Number, //ตัวเลข
      default: 0 //กำหนดค่าเริ่มต้น ถ้าไม่ระบุค่ามา
    }
  },
  template: '<h2> {{name}} // {{view}}</h2>'
});

Vue.component('world', {
  props: ['item', 'index'],
  template: '<h3> {{index + 1}}. {{item}} </h3>'
});

var band = {
  template: '#musicBand'
};

var customComponent = new Vue({
  el: "#custom-component",
  components:{
    musicBandApp:band
  },
  data: {
    newLand: '',
    lands: [
      'ไทย', 'อังกฤษ', 'สหรัฐอเมริกา', 'คองโก'
    ]
  },
  methods: {
    //เพิ่มประเทศใหม่
    addLand: function() {
      this.lands.push(this.newLand) //เอาค่าใหม่ไปใส่อันเก่า
      this.newLand = '' //เคลียร์ค่าให้ว่าง
    }
  }
})
