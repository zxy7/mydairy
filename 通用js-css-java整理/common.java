//生成编号
public static String CreateID(String flag) {
  SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
  String datestr = sdf.format(new Date());

  String[] array = new String[10];
  for (int i = 0; i < 10; i++) {
    int x = (int) (Math.random() * 10);
    array[i] = String.valueOf(x);

  }
  String l = "";
  for (int i = 0; i < array.length; i++) {
    l += array[i];

  }
  String trString = flag + datestr + l;
  return trString;
}

//把json数组转化为javabean
@SuppressWarnings("unchecked")
public static <T> List<T> GetArrayFromJson(String json, Class<T> classtype) {
  JSONArray JsonObject = JSONArray.fromObject(json);

  String[] dateFormats = new String[] { "yyyy-MM-dd HH:mm:ss", "yyyy/MM/dd HH:mm:ss", "yyyy-MM-dd'T'HH:mm:ss", "yyyy-MM-dd", "yyyy/MM/dd" };

  JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(dateFormats));

  Collection<T> collections = JSONArray.toCollection(JsonObject, classtype);
  List<T> lists = new ArrayList<T>();
  for (T t : collections) {
    if (classtype.equals(t.getClass()))
      lists.add(t);
  }
  return lists;
}


	//把json对象转化为javabean
	@SuppressWarnings("unchecked")
	public static <T> T GetOneFromJson(String json, Class<T> classtype) {
		JSONObject JsonObject = JSONObject.fromObject(json);


		String[] dateFormats = new String[] { "yyyy-MM-dd HH:mm:ss", "yyyy/MM/dd HH:mm:ss", "yyyy-MM-dd'T'HH:mm:ss", "yyyy-MM-dd", "yyyy/MM/dd" };

		JSONUtils.getMorpherRegistry().registerMorpher(new DateMorpher(dateFormats));

		T item = (T) JSONObject.toBean(JsonObject, classtype);
		return item;
	}

	//把java数组转化为json
	public static <T> String OutLists(List<T> lists, boolean hasdate) {

		JsonConfig config = new JsonConfig();
		if (hasdate)
			config.registerJsonValueProcessor(java.util.Date.class, new JsonDateValueProcessor());

		if (lists.size() > 0) {
			T item = lists.get(0);
			config.registerPropertyExclusions(item.getClass(), ((BaseBean) item).OnExclusions());
		}

		return ToolUtils.GetJsonFromArray(lists, config);

	}

	//把java对象转化为json
	public static <T> String OutListOne(T item, boolean hasdate) {

		JsonConfig config = new JsonConfig();
		if (hasdate)
			config.registerJsonValueProcessor(java.util.Date.class, new JsonDateValueProcessor());
		JSONObject JsonObject = JSONObject.fromObject(item, config);

		return JsonObject.toString();

	}

  //将unicode转换成字符串
    public static String unicode2String(String unicode) {
    	 
        StringBuffer string = new StringBuffer();
     
        String[] hex = unicode.split("\\\\u");
     
        for (int i = 1; i < hex.length; i++) {
     
            // 转换出每一个代码点
            int data = Integer.parseInt(hex[i], 16);
     
            // 追加成string
            string.append((char) data);
        }
     
        return string.toString();
    } 
    
    // 判断请求来自linux还是windows
	 
	public static boolean IsLinux() {
		boolean flag = false;
		ConstsConfig.getConfig().loadPropertiesFromSrc();

		try {
			URL ut = Thread.currentThread().getContextClassLoader().getResource("");
			String path = ut.toString().replace("file:/", "");
			if (path.indexOf(ConstsConfig.getConfig().getLinuxflag()) >= 0) {
				flag = true;
			} else {

			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}

		return flag;
	}