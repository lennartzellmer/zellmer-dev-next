---
title: "Templating with MJML and MailJet"
description: "Let's be honest... MailJet is a bad service. I had hoped it would get better after Mailgun bought Mailjet a few years ago. I was disappointed. MailJet's service is incredibly inconvenient to use, but it's cheap... so it shows. However, there is one thing I really like about MailJet and that is their template language MJML. Let's discover its undocumented features!"
seo_title: "Templating with MJML and MailJet"
seo_description: "Let's be honest... MailJet is a bad service. I had hoped it would get better after Mailgun bought Mailjet a few years ago. I was disappointed. MailJet's service is incredibly inconvenient to use, but it's cheap... so it shows. However, there is one thing I really like about MailJet and that is their template language MJML. Let's discover its undocumented features!"
thumbnail: /posts/blogpost_mjml.jpeg
slug: templating-with-mjml-and-mailjet
---

Let's be honest... [MailJet](https://www.mailjet.com/) is a terrible service. I had hoped it would improve after Mailgun bought MailJet a few years ago, but I was disappointed.

MailJet’s UI is incredibly slow, it’s poorly documented, the rights management on the platform is a disaster, the support is basically brain-dead, and everything about it makes me angry. But it’s cheap… and it shows.

However, there is one thing I really like about MailJet: their template language, MJML.

But why do we even need MJML in the first place? After all, emails are just HTML—couldn’t you simply write HTML directly without an extra layer? In principle, yes—but there’s a catch.

Email still seems to be a relic from the distant past. It’s so outdated that it mostly relies on old-school table structures and can’t take advantage of newer technologies or CSS features. This is absolutely horrible and primarily caused by poor support from email clients.

If you thought Internet Explorer was a nightmare for web pages, you haven’t tried designing a fancy HTML email for Outlook yet. Outlook 2019, for example, still uses Word’s rendering engine—yes, the text editor WORD(!)—to display HTML emails. If you’ve ever tried to align something in Word, you know what that means.

What makes things worse is that different browsers and clients display emails in different ways. As a result, it’s nearly impossible to evaluate the final appearance of a sent email. As a developer, you never truly know what the recipient sees. Because of this, companies like Litmus have built entire businesses around the problem. With Litmus, you can see how your emails look in various clients to determine if the inevitable quirks are still acceptable.

To avoid this technical complexity, there’s MJML. Instead of writing HTML directly, you use custom tags, which the mjml2html engine then converts to HTML. During this conversion, the engine ensures that your chosen CSS options and layouts work across as many email clients as possible. Essentially, you don’t have to worry about table structures anymore. For instance, the mjml2html converter will translate `<mj-button>Click me</mj-button>` into a mixture of `divs` and `tables` that most clients can handle.

The [MJML docs](https://documentation.mjml.io/) are absolutely fine. Only a few questions remain unanswered.

Since you’re just creating HTML emails with MJML, you’re not tied to MailJet. Even though MJML is developed by MailJet, it’s an open-source component. Given how hard it is for me to say anything positive about the rest of MailJet, this is worth highlighting. :D

Let’s get to the biggest headache with MailJet: their proprietary templating engine.

MailJet offers a proprietary Handlebar-based templating system to use alongside MJML. It’s mainly intended for populating transactional or marketing emails with names and other more complex data.

Unfortunately, it’s completely broken—and it’s even worse if you try to use MailJet’s Web UI (please, please don’t!). The UI won’t let you handle data types other than strings, for instance. It doesn’t even give you proper error messages; it just breaks.

Please feel free to use this [MailJet deployment script](https://github.com/lennartzellmer/mailjet-deployment-template) I built instead. It lets you easily test MJML locally and then deploy to MailJet. You’ll have to get familiar with it since it isn’t documented yet—but maybe I’ll write a blog post about it at some point. For local development, there are excellent plugins for VS Code or WebStorm/IntelliJ. Use those and save yourself a lot of trouble.

In principle, the core features are fine. They’re just poorly documented—or sometimes not documented at all—for many use cases.

## Useful snippets

To preserve a few useful things for my future self, I'd like to share some undocumented snippets below.

### Set variables and concatenate strings

Sometimes it can be handy to define variables in advance to centralize more complex logic (e.g., in connection with [mj-include](https://documentation.mjml.io/#mj-include)). Sometimes this can be a bit tricky, but the following markup works:

```html
<mj-raw>
  // make sure the variable is defined
  {% set greeting = "" %}
  
  // conditionally reassign the variable
  {% if var:name:false %}
    {% set greeting = "Hello " + var:name:false + "," %}
  {% else %}
    {% set greeting = "Hello," %}
  {% endif %}
</mj-raw>
```

### Avoid rendering MJ-Raw in the preview

All examples shown on MailJet suggest that mj-raw elements are always rendered in the output and only disappear when converting to MailJet. This is super annoying because, in development, you don’t want to see this templating logic. However, there’s a simple trick: wrap mj-raw elements in another component so they’re not printed but are still interpreted logically.

### Formatting dates and timezones from EPOCH seconds

This is how it works:

``` handlebars
{{ FormatDateTime("[dd.mm](dd.mm).yyyy", ToDate(var:endDate)) }}

{{ FormatDateTimeTZ("[dd.mm](dd.mm).yyyy", ToDate(var:endDate), "+03:00") }}
```

![](/posts/blogpost_mjml_example_1.png)

### Format currency units

``` handlebars
{{ FormatNumberLocale("#,##0.00", var:amount/100, "de_DE") }}&#8239;€
```

![](/posts/blogpost_mjml_example_2.png)

Conclusion
----------

To be fair, other vendors also have weird template languages. However, their documentation and UIs are much better (e.g. [Sendinblue](https://help.sendinblue.com/hc/en-us/articles/360000946299-About-Sendinblue-Template-Language) or [Mailchimp](https://mailchimp.com/developer/transactional/docs/templates-dynamic-content/#handlebars) or customer.io). If possible, I would try one of these providers in the future. I don’t expect much, but at least their user base is a bit larger — which gives me hope.

Email is still a pain, unfortunately.