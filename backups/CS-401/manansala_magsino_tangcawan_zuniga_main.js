const nodemailer = require("nodemailer");
const date = Date();

let mailTransporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "sugoimeme@gmail.com",
		pass: "zcksbikuzorhmzvd",
	},
});

let mailDetails = {
	from: "compsci401@outlook.com",
	to: "markzuniga6@gmail.com, nicholemanansala360@gmail.com, kyletangcs10@gmail.com",
	subject: "email test",
	text: "test mail at " + date + ", check spam if need",
};

mailTransporter.sendMail(mailDetails, function (err, data) {
	if (err) {
		console.log("Error Occurs");
	} else {
		console.log("Email sent successfully");
	}
});