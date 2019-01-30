# pdm表结构转json格式
复制粘贴实在是累手，一切为了偷懒，琢磨着把如下pdm的表结构直接一键生成想要的json数据

![原始数据](/img/pdm1.png)

![目标数据](/img/pdm2.png)

1. 点击左上角选中整个表
1. 导出到excel保存
![操作步骤](/img/pdm3.png)
1. 打开excel，使用fx函数 =CONCAT("{title: '",A2,"',"," key:'",LOWER(B2),"'}")
![操作步骤](/img/pdm4.png)
1. ok

用python写个脚本done

    # -*- coding: utf-8 -*- 
    import  xdrlib ,sys
    import xlrd
    import xlwt

    def main():
        data = xlrd.open_workbook('a.xls')
        table = data.sheets()[0]
        nrows = table.nrows #行数
        try:  
            # 创建excel文件  
            filename=xlwt.Workbook()  
            # 给工作表命名，test  
            sheet=filename.add_sheet("test")  
            for rownum in range(1,nrows):
            row = table.row_values(rownum)
            if row:
              print "{title: '"+row[0]+"',"+" key:'"+row[1].lower()+"'}"
              sheet.write(rownum,0,"{title: '"+row[0]+"',"+" key:'"+row[1].lower()+"'}")
            filename.save("b.xls")  
        except Exception,e:  
            print(str(e)) 

    if __name__=="__main__":
        main()