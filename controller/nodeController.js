

module.exports = {
	index:(request,response)=>{
		let sukses = 0;
		response.render('node',{sukses})
	},

	convert:(request,response)=>{ 
		const Excel = require('excel4node');
		const wb = new Excel.Workbook();
		const worksheet = wb.addWorksheet('Sheet 1');
        const styleHead = wb.createStyle({
            
              font: {
                  color: 'black',
                  size: 12,
                  bold: true,
                  horizontal:'center'
                  },
              numberFormat: '$#,##0.00; ($#,##0.00); -'
            
                    });

        const styleRows = wb.createStyle({
            
              font: {
                  color: 'black',
                  size: 12,
                  horizontal:'center'
                  },
              numberFormat: '$#,##0.00; ($#,##0.00); -'
            
                    });

         worksheet.row(5).freeze();
        // set lebar kolom
                worksheet.column(2).setWidth(11);
                worksheet.column(3).setWidth(19);
                worksheet.column(4).setWidth(23);
                worksheet.column(5).setWidth(19);
                worksheet.column(6).setWidth(22);
                worksheet.column(7).setWidth(60);
                worksheet.column(8).setWidth(10);

        //set header tabel
                
                worksheet.cell(5,3).string('Username').style(styleHead);
                worksheet.cell(5,4).string('alamat').style(styleHead);
                worksheet.cell(5,5).string('telpon').style(styleHead);
               
        //set isi tabel
                worksheet.cell(6,3).string(request.body.username).style(styleRows);
                worksheet.cell(6,4).string(request.body.alamat).style(styleRows);
                worksheet.cell(6,5).string(request.body.telpon).style(styleRows);
              
       
                wb.write('./publik/testing.xlsx');
                let sukses = 1;
                response.render('node',{sukses});
	}

	
}