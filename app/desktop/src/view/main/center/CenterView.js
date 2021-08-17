Ext.define('Myapp.view.main.center.CenterView', {
	extend: 'Ext.Container',
	xtype: 'centerview',
	cls: 'centerview',
	layout: 'card',
	items:[{
		xtype:'panel',
		viewModel: {
			type: 'test'
		},
		fullscreen:true,

		//layout:'hbox',
		defaultType: 'textfield',
		defaults:{
			flex:1
		},
		items:[{
			html: 'User Form',
			style: 'background-color:white'
		},
	{
		fieldLabel: 'First Name',
		name:'firstName',
		bind:'{firstname}'
	},
	{
		fieldLabel:'Last Name',
		name: 'lastName'
	},
	{
		xtype: 'datefield',
		fieldLabel: 'Date of Birth',
		name: 'birthDate',
		msgTarget:'under',
		invalidText:'"{0}" bad. "{1}" good.'
	},
	
	{
		xtype:'button',
		text:'Submit',
		handler:function(){
			console.log('Added');
		}
	},

	{
		xtype:'button',
		text:'Save',
		handler: function(){
			console.log('Test');
			Ext.Ajax.request({
				url: 'http://localhost:3000/posts',
				success:function(response){
					const responseBody =Ext.decode(response.responseText)
					console.log(responseBody)
				}
			})
		}
	},
	
	/*
	{
		xtype:'button',
		text:'Submit',
		handler: function(){
			Ext.Ajax.on("beforeRequest",function() {
				console.log('Before');
			});
			
			Ext.Ajax.request({
				url: 'http://localhost:3000/posts/2',
				method: 'DELETE',
				timeout: 2000,
				success:function(response){
					Ext.msg.alert(response);
					
				},
				failure:function(response){
					Ext.msg.alert(response);
					
				},
			})
		}
	},
	*/
	{
		xtype:'button',
		text:'Save',
		handler: function(){
			console.log('Test');
			Ext.Ajax.request({
				url: 'http://localhost:3000/posts',
				method: 'Post',
				jsonData:{
					name: 'EXt'
				},
				success:function(response){
					Ext.msg.alert(response);
				},
				failure:function(response){
					Ext.msg.alert(response);
					
				},
			})
		}
	}
	

]
	}]
});
