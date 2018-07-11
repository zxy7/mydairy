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