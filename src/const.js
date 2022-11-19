//Dữ liệu menu
export const MENU_ITEMS =[
    {
        text: "Tổng quan",
        iconCoordinates: [30, 1585],
        activeClass: "list-item__active",
        route: "/tong-quan",
      },
      {
        text: "Tiền mặt",
        iconCoordinates: [73, 1585],
        activeClass: "list-item__active",
        route: "/nhan-vien",
      },
      {
        text: "Tiền gửi",
        iconCoordinates: [117, 1585],
        activeClass: "list-item__active",
        route: "/tien-gui",
      },
      {
        text: "Mua hàng",
        iconCoordinates: [161, 1585],
        activeClass: "list-item__active",
        route: "/mua-hang",
      },
      {
        text: "Bán hàng",
        iconCoordinates: [206, 1585],
        activeClass: "list-item__active",
        route: "/ban-hang",
      },
      {
        text: "Quản lý hoá đơn",
        iconCoordinates: [249, 1585],
        activeClass: "list-item__active",
        route: "/quan-ly-hoa-don",
      },
      {
        text: "Kho",
        iconCoordinates: [291, 1585],
        activeClass: "list-item__active",
        route: "/kho",
      },
      {
        text: "Công cụ dụng cụ",
        iconCoordinates: [336, 1585],
        activeClass: "list-item__active",
        route: "/cong-cu-dung-cu",
      },
      {
        text: "Tài sản cố định",
        iconCoordinates: [380, 1587],
        activeClass: "list-item__active",
        route: "/tai-san-co-dinh",
      },
      {
        text: "Thuế",
        iconCoordinates: [425, 1587],
        activeClass: "list-item__active",
        route: "/thue",
      },
      {
        text: "Giá thành",
        iconCoordinates: [470, 1585],
        activeClass: "list-item__active",
        route: "/gia-thanh",
      },
      {
        text: "Tổng hợp",
        iconCoordinates: [514, 1585],
        activeClass: "list-item__active",
        route: "/tong-hop",
      },
      {
        text: "Ngân sách",
        iconCoordinates: [381, 1659],
        activeClass: "list-item__active",
        route: "/ngan-sach",
      },
      {
        text: "Báo cáo",
        iconCoordinates: [551, 1585],
        activeClass: "list-item__active",
        route: "/bao-cao",
      },
      {
        text: "Tài chính",
        iconCoordinates: [207, 1664],
        activeClass: "list-item__active",
        route: "/phan-tich-tai-chinh",
      },
]
//Số bản ghi trên trang
export const OPTION_PAGING=[
    {value: 10, name:"10"},
    {value: 20, name:"20"},
    {value: 30, name:"30"},
    {value: 50, name:"50"},
]
//Dữ liệu giới tính
export const LIST_GENDER=[
  {
    value: 1,
    name : "Nam"
  },
  {
    value: 2,
    name : "Nữ"
  },
  {
    value: 3,
    name : "Khác"
  }
]

//dỮ liệu table employee
export const EMPLOYEE_HEADER = [
  {
    Class: "text-align--left sticky_header_left_1",
    CellClass: "sticky_body_left_1",
    Caption: "MÃ NHÂN VIÊN",
    propValue: "EmployeeCode",
    Width: "130",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "TÊN NHÂN VIÊN",
    propValue: "EmployeeName",
    Width: "200",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "GIỚI TÍNH",
    propValue: "Gender",
    Width: "100",
  },
  {
    Class: "text-align--center",
    CellClass: "text-align--center",
    Caption: "NGÀY SINH",
    propValue: "DateOfBirth",
    Width: "150",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Title:"Số chứng minh nhân dân",
    Caption: "SỐ CMND",
    propValue: "IdentityNumber",
    Width: "150",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "CHỨC DANH",
    propValue: "PositionName",
    Width: "200",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "TÊN ĐƠN VỊ",
    propValue: "DepartmentName",
    Width: "250",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "SỐ TÀI KHOẢN",
    propValue: "BankAccountNumber",
    Width: "200",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "TÊN NGÂN HÀNG",
    propValue: "BankName",
    Width: "250",
  },
  {
    Class: "text-align--left",
    CellClass: "text-align--left",
    Caption: "CHI NHÁNH NGÂN HÀNG",
    propValue: "BankBranchName",
    Width: "250",
  },
];

//Dữ liệu header Detail
export const HEADER_DETAIL ={
  PopupAddEmployee:"Thông tin nhân viên",
  PopupEditEmployee:"Sửa thông tin nhân viên"
}
//Dữ liệu table department
export const DEPARTMENT_HEADER=[
  {
    Width: "30",
    propValue:"DepartmentCode",
    Caption: "Mã đơn vị"
  },
  {
    Width: "70",
    propValue:"DepartmentName",
    Caption: "Tên đơn vị"
  },
]
export const POISITION_HEADER=[
  {
    Width: "30",
    propValue:"PositionCode",
    Caption: "Mã chức danh"
  },
  {
    Width: "70",
    propValue:"PositionName",
    Caption: "Chức danh"
  },
]
// Giá trị mặc định của phân trang
export const DEFAULT_PARAMS = {
  pageSize: 10,
  pageNumber: 1,
  employeeFilter: "",
};

// loại popup cảnh báo
export const DIALOG_TYPE = {
  ALERT: "alert",
  WARNING: "warning",
  ASK_OPTION: "askOption",
  ASK_CANCELABLE: "ask",
};

//Giá trị của toast khi thêm hoặc sửa
export const MESS_TOAST ={
  ADD_SUCCSES:{
    classIcon: "icon-succses",
    classColor:"color-succses",
    headerMess:"Thêm mới thành công",
    toastAct: "Bạn đã thêm mới thành công nhân viên"

  },
  ADD_FAIL:{
    classIcon: "icon-fail",
    headerMess:"Thêm mới thất bại",
    classColor:"color-fail",
    toastAct: "Bạn đã thêm mới thất bại nhân viên"
  },
  EDIT_SUCCSES:{
    classIcon: "icon-succses",
    headerMess:"Sửa thành công",
    classColor:"color-succses",
    toastAct: "Bạn đã sửa thành công nhân viên"
  },
  EDIT_FAIL:{
    classIcon: "icon-fail",
    headerMess:"Sửa thất bại",
    classColor:"color-fail",
    toastAct: "Bạn đã sửa thất bại nhân viên"
  },
  DELETE_SUCCSES:{
    classIcon: "icon-succses",
    headerMess:"Xoá thành công",
    classColor:"color-succses",
    toastAct: "Bạn đã xoá thành công nhân viên"
  },
  DELETE_FAIL:{
    classIcon: "icon-fail",
    headerMess:"Xoá không thành công",
    classColor:"color-fail",
    toastAct: "Bạn đã xoá không thành công nhân viên"
  }
}