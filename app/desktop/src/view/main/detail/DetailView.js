

// The data server is hosted on Heroku, and it doesn't start up
// until the first request.
Ext.define('MyApp.view.Main', {
  extend: 'Ext.grid.Grid',
  title: 'Businesses',
   
  columns: [
      { xtype: 'rownumberer', width: 55},
      { text: 'Name',  dataIndex: 'name', flex : 2},
      { text: 'Address', dataIndex: 'full_address', flex : 3  },
      { text: 'City', dataIndex: 'city', flex: 1 }
  ],
   
  store: {
      type: 'virtual',
      pageSize: 200,
      proxy : { type : 'ajax', url : '//nameless-tundra-27404.herokuapp.com/go/?fn=bigdata', reader : { type : 'json', rootProperty : 'data' } },
      autoLoad: true
  }
   
  });
  Ext.application({
  name: 'MyApp',
  mainView: 'MyApp.view.Main'
  });

Ext.define('Myapp.view.main.detail.DetailView', {
	extend: 'Ext.Container',
	xtype: 'detailview',
  cls: 'detailview',
  layout: 'fit',
  /*items: [
    {
      xtype: 'container', 
      style: 'background:white', 
      html: '<div style="padding:10px;font-size:24px;">detailview</div>'
    }
  ] */
})