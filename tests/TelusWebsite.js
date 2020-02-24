module.exports = {
  'TELUS Website Login Test': function (client) {
    client
      .url('https://www.telus.com/en/')
	  .assert.titleContains('TELUS')
	  .waitForElementVisible('a[data-di-id=di-id-23a1f14-f417c9e8]',20000)
	  .click('a[data-di-id=di-id-23a1f14-f417c9e8]')
	  .waitForElementVisible('input[name=IDToken1]',20000)
	  .assert.visible('input[name=IDToken1]')
	  .setValue('input[name=IDToken1]','vijay')
	  .assert.visible('input[name=IDToken2]')
	  .setValue('input[name=IDToken2]','Shinde')
	  .waitForElementVisible('button[data-di-id=di-id-e746dae1-e59e3839]',20000)
	  .assert.visible('button[data-di-id=di-id-e746dae1-e59e3839]')
	  .click('button[data-di-id=di-id-e746dae1-e59e3839]')
	  .assert.containsText('div[data-testid=auth-failed]','Sorry, the username and password you entered does not match our records.')
      .end()    
    }
};