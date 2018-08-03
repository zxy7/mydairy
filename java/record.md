## mybatis传多个参数
~~~
<select id="GetListXXX"  resultType="XXXbean" >
  SELECT * from table where a=#{0} and b= #{1}
</select>
~~~
## 传单个参数
~~~
<select id="GetListXXX" parameterType="xxxbean" resultType="XXXbean" >
  SELECT * from table where a=#{paramname}
</select>
~~~
## 函数
~~~
<select id="" statementType="CALLABLE" parameterType="xxxbean" resultType="xxxbean" >
  {call functionname(
    #{param1,javaType=int,jdbcType=INTEGER},
    #{param1,javaType=String,jdbcType=VARCHAR},
    #{param1,javaType=double,jdbcType=DECIMAL},
    #{param1,javaType=boolean,jdbcType=BOOLEAN},
    #{item.getaction,javaType=String,jdbcType=VARCHAR}

    #{search.search,javaType=String,jdbcType=VARCHAR},
    #{search.start,javaType=int,jdbcType=INTEGER},
    #{search.end,javaType=int,jdbcType=INTEGER},
    #{search.total,javaType=int,jdbcType=INTEGER,mode=OUT},
    #{search.userid,javaType=String,jdbcType=VARCHAR},
    #{search.getaction,javaType=String,jdbcType=VARCHAR}
  )}
</select>
~~~
## mybatis 插入数据时返回主键
~~~
<insert id="" useGeneratedKeys="true" keyProperty="id" parameterType="xxbean">   
  insert into table(parm1,parm2) values (#{parm1}, #{parm2});
</insert>
<insert id=""  parameterType="xxbean">
  insert into test (name) values (#{name})
  <selectKey keyProperty="id" resultType="java.lang.Integer">
  select LAST_INSERT_ID() as id
  </selectKey>
</insert>
~~~
## mybatis like查询%
~~~
--all 用$不能防sql注入  
select * from user where name like '%${name}%'  
  
--mysql,oracle （db2的concat函数只支持2个参数）  
select * from user where name like concat('%',#{name},'%')   
  
--oracle,db2  
select * from user where name like '%'||#{name}||'%'  
  
--SQL Server  
select * from user where name like '%'+#{name}+'%'  
  
--据说这种是预编译，有空测下  
select * from user where name like "%"#{name}"%"  
~~~
## java sleep用法
~~~
try { 
  Thread.sleep(8000); 
} catch (InterruptedException e) { 
  e.printStackTrace(); 	
}
~~~
## java循环遍历改变集合元素值
~~~
// 1.最普通的一种方式，方便增删改
 for(int i = 0;i < size;i++)

 //2.for each方式，动态添加或者删除元素的时候抛出异常，修改元素值 集合不会改变
 for(BEAN b: BEANLIST)

 //3.迭代器，可增删
 Iterator<LinkAgeSmall> iterator = BEANLIST.iterator();
 while (iterator.hasNext()) {
      iterator.next();
}
~~~

## 日期丢失时分秒
 ~~~ 
 #{endtime,javaType=java.util.Date,jdbcType=DATE}, 日期无时分秒

 #{endtime,javaType=java.util.Date},  

 jdbcType = DATE , 只传入年月日  （数据库中的时间为yyyy-MM-dd）

jdbcType = TIME , 只传入时分秒

jdbcType = TIMESTAMP ,  或者jdbcType不写， 年月日+ 时分秒 （数据库中的时间为yyyy-MM-dd HH:mm:ss）
 ~~~