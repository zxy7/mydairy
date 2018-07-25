## mybatis传多个参数
<select id="GetListXXX"  resultType="XXXbean" >
  SELECT * from table where a=#{0} and b= #{1}
</select>
## 传单个参数
<select id="GetListXXX" parameterType="xxxbean" resultType="XXXbean" >
  SELECT * from table where a=#{paramname}
</select>
## 函数
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
## mybatis 插入数据时返回主键
<insert id="" useGeneratedKeys="true" keyProperty="id" parameterType="xxbean">   
  insert into table(parm1,parm2) values (#{parm1}, #{parm2});
</insert>
<insert id=""  parameterType="xxbean">
  insert into test (name) values (#{name})
  <selectKey keyProperty="id" resultType="java.lang.Integer">
  select LAST_INSERT_ID() as id
  </selectKey>
</insert>

## java sleep用法