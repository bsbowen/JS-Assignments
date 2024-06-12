let appData = {
    accountName: 'Gmail',
    user: {
        name: 'John Doe',
        emailAddress: 'john.doe@example.com'
    },
    mailboxes: ['inbox','vip','junk','trash','sent', 'drafts'],
    contacts: [
        {name: 'Al', emailAddress: 'al@example.com', lastMessage: "I won't be at the meeting today"},
        {name: 'Britt', emailAddress: 'britt@example.com', lastMessage: "Weelky Report can be found in attachement"},
        {name: 'Chelsea', emailAddress: 'cc@example.com', lastMessage: " Your PDO request has been denied."}
    ],
    emails: [
        {
            sender: 'al@example.com',
            recipient: 'john.doe@example.com',
            subject: 'Meeting Reminder',
            body: 'Do not forget about the meeting at 10 AM.',
            status: 'unread'
        },
        {
            sender: 'britt@example.com',
            recipient: 'john.doe@example.com',
            subject: 'Lunch Plans',
            body: 'Are we still on for lunch today?',
            status: 'read'
        }
    ]
};

// list of mailbox names
let mailboxNames = appData.mailboxes;
console.log('Mailbox Names:', mailboxNames);

//  list of emails
let emailList = appData.emails;
console.log('Email List:', emailList);

//  second email in the visible list
let secondEmailText = appData.emails[1].body;
console.log('Second Email Text:', secondEmailText);

//  email marked  as sent (change the status of the first email)
appData.emails[0].status = 'sent';
console.log('Updated Email Status:', appData.emails[0]);

//  draft email added to the drafts mailbox
let draftEmail = {
    sender: 'britt@example.com',
    recipient: 'chelsea@example.com',
    subject: 'Draft Email',
    body: 'This is a draft email.',
    status: 'draft'
};
appData.emails.push(draftEmail);
console.log('Draft Email Added:', draftEmail);