module.exports = class CompanyModel {
    companyId;

    companyName;

    companyEmail;

    companyPhone;

    companyAddress;

    managerName;

    managerPhone;

    managerEmail;

    managerIdNumber;

    createdAt;

    constructor({
        companyName, companyEmail, companyPhone, companyAddress, managerName, managerPhone, managerEmail, managerIdNumber, createdAt
    }) {
        // this.companyId = companyId;
        this.companyName = companyName;
        this.companyEmail = companyEmail;
        this.companyPhone = companyPhone;
        this.companyAddress = companyAddress;
        this.managerName = managerName;
        this.managerPhone = managerPhone;
        this.managerEmail = managerEmail;
        this.managerIdNumber = managerIdNumber;
        this.createdAt = createdAt;
    }

    toJSon() {
        return {
            // companyId: this.companyId,
            companyName: this.companyName,
            companyEmail: this.companyEmail,
            companyPhone: this.companyPhone,
            companyAddress: this.companyAddress,
            managerName: this.managerName,
            managerPhone: this.managerPhone,
            managerEmail: this.managerEmail,
            managerIdNumber: this.managerIdNumber,
            createdAt: new Date(),
        };
    }
};

// export const Company = () => {
//     return {
//       companyId: '', // Backend tự gen
//       companyName: '', // Required
//       companyEmail: '', // Required
//       companyPhone: '', // Required
//       companyAddress: '', // Required
//       managerName: '', // Required
//       managerPhone: '', // Required
//       managerEmail: '', // Required
//       managerIdNumber: '', // Required
//       createdAt: '', // Backend tự gen
//     }
//   }
//   export const Employee = () => {
//     return {
//       employeeId: '', // Backend tự gen
//       employeeName: '', // Required
//       employeeEmail: '', // Required
//       employeePhone: '', // Required
//       employeeAddress: '', // Required
//       employeeBirthday: '', // Required
//       employeeIdNumber: '', // Required
//       createdAt: '', // Backend tự gen
//     }
//   }

// POST /api/v1/auth/employee/login // Gửi authResponse của Google
// Sau khi xác thực người dùng
// Tạo employee và lưu vào database
// Generate token từ employeeId mới tạo
// Trả token về cho Frontend dùng

// POST /api/v1/auth/company/login // Gửi authResponse của Google
// Sau khi xác thực người dùng
// Tạo company và lưu vào database
// Generate token từ companyId mới tạo
// Trả token về cho Frontend dùng

// GET /api/v1/companies/:id // Token required
// PUT /api/v1/companies/:id // Token required

// contractId: '', // Backend tự generate
//      createAt
//      contractCode: '' // BE gen
//     contractStatus: '', // Backend tự generate, PENDING, ACCEPTED, REJECTED
//     employeeSignedAt: new Date(),
//     companySignedAt: new Date(),
//     employeeSignature: '', // Base 64 string
//     companySignature: '', // Base 64 string

//     contractName: '', // Required
//     contractDescription: '',
//     contractType: '', // Required
//     contractStartDate: '', // Required
//     contractEndDate: '', // Nếu null thì là hợp đồng vô hạn
//     employeeId: '', // Required
//     companyId: '', // Required
// contractFields: []
