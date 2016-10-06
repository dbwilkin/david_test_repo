define(function (require) {
    var register_suite = require('intern!object');
    var assert = require('intern/chai!assert');
    var expect = require('intern/chai!expect');
    var poll_until = require('intern/dojo/node!leadfoot/helpers/pollUntil');
    var pressKeys = require('intern/dojo/node!leadfoot/keys')
    var utils = require('tests/utils');
    var config = require('tests/config');
    var test_data = require('tests/test_data');
    var campaign_name = 'Nurture Campaign 1 Track 1';
    var track_1_email_item = 'Track 1 Email Item';
    var command = require('intern/dojo/node!leadfoot/Command');
    	
    register_suite({
        'Tested help_menu_changes_3134': function() {
			return this.remote
				.setFindTimeout(5000)
				.end()
				
				.findByLinkText('Help') // Help menu
				.click()
				.then(function () {
					// Help menu displays
					console.log("Help menu displays correctly")
                })
				.end()
				.findByLinkText('Status')
				.then(function () {
					// Status menu item displays correctly
					console.log("Status menu item displays correctly")
                })	
				.getAttribute('href')
                .then(function (text) {
                	// Expect the href is the URL of the EMP Status page
                	console.log("Status URL is: " + text)
                	expect(text).to.equal('http://status.spectrumemp.com');
                })
				.end()
				.findByLinkText('FAQ')
                .then(function () {
                	// FAQ menu item displays correctly
                	console.log("FAQ menu item displays correctly")
                })
                .getAttribute('href')
                .then(function (text) {
                	// Expect the href is the URL of Spectrum Freshdesk Solutions
                	console.log("FAQ URL is: " + text)
                	expect(text).to.equal('https://spectrumedu.freshdesk.com/support/solutions');
                })
				.end()
				.findByLinkText('Client Forums')
                .then(function () {
                	// Client Forums menu item displays correctly
                	console.log("Client Forums menu item displays correctly")
                })
                .getAttribute('href')
                .then(function (text) {
                	// Expect the href is the URL of Spectrum Freshdesk Discussions
                	console.log("Client Forums URL is: " + text)
                	expect(text).to.equal('https://spectrumedu.freshdesk.com/support/discussions');
                })
				.end()
				.findByLinkText('View Support Requests')
                .then(function () {
                	// View Support Requests menu item displays correctly
                	console.log("Client Forums menu item displays correctly")
                })
                .getAttribute('href')
                .then(function (text) {
                	// Expect the href is the URL of Spectrum Freshdesk Discussions
                	console.log("View Support Requests URL is: " + text)
                	expect(text).to.equal('https://spectrumedu.freshdesk.com/support/tickets');
                })
                .end()
                .findByLinkText('Create Support Request')
                .then(function () {
                	// Create Support Request menu item displays correctly
                	console.log("Create Support Request menu item displays correctly")
                })
                
                // Click on Create Support Request
                .click()
                .end()

				// Switch to the modal frame
				.switchToFrame('freshwidget-frame')

				// Find modal title element
				.findByCssSelector('#feedback-widget-container > div.modal-header.feedback-header.modal-body-change > div > h3')
				.getVisibleText()
				.then(function (text) {
    				assert.strictEqual(text, 'New Support Request')
    				console.log("New Support Request modal title displays correctly");
    			})         
				.end()

				// Switch back to parent frame; that's where the 'X' to close the modal is located
				.switchToParentFrame()
				.findById('freshwidget-close')
				.click()
				.end()

				.sleep(1000)
                .end()
		}
	});
});
