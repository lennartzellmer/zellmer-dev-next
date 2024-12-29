---
title: "Templating with MJML and MailJet"
description: "Let's be honest... MailJet is a bad service. I had hoped it would get better after Mailgun bought Mailjet a few years ago. I was disappointed. MailJet's service is incredibly inconvenient to use, but it's cheap... so it shows. However, there is one thing I really like about MailJet and that is their template language MJML. Let's discover its undocumented features!"
seo_title: "Templating with MJML and MailJet"
seo_description: "Let's be honest... MailJet is a bad service. I had hoped it would get better after Mailgun bought Mailjet a few years ago. I was disappointed. MailJet's service is incredibly inconvenient to use, but it's cheap... so it shows. However, there is one thing I really like about MailJet and that is their template language MJML. Let's discover its undocumented features!"
thumbnail: /blogpost_mjml.jpeg
slug: templating-with-mjml-and-mailjet
---

# Templating with MJML and MailJet - Zellmer.dev
Let's be honest... [MailJet](https://www.mailjet.com/) is a terrible service. I had hoped it would get better after Mailgun bought Mailjet a few years ago. Well, I was disappointed.

MailJet's UI is incredibly slow, it's super poorly documented, the rights management on the platform is a disaster, the support is brain-dead and everything about it makes me angry. But: it's cheap... and that shows.

However, there is one thing I really like about MailJet and that is their template language MJML.

But what is the need for MJML in the first place? Emails are simply HTML, surely you could just write that without any intermediate step? Well, in principle yes - but there is a catch.

Email still seems to be a relic of the distant past. The system is so outdated that in most cases it relies on plain old table structures, failing to take advantage of simple „new“ technologies or CSS features.

This is absolutely horrible and is mainly caused by the poor support of the email clients.

In case you thought Internet Explorer was a nasty slice of hell for displaying web pages, you haven't tried designing a fancy HTML email for Outlook yet. Outlook 2019, for instance, still uses Word's rendering engine - yes, the text editor WORD(!) - to display HTML emails. If you ever tried to align something in Word you know what that means.

What only makes things worse is that different browsers and clients display emails in different ways. As a result, it becomes virtually impossible to properly evaluate the finished result of a sent email. As a developer, you never really know what the recipient sees. Off the back of this problem, companies such as Litmus have developed an entire business model. With Litmus, you can have your e-mails displayed on different e-mail clients in order to evaluate whether the inconsistencies are still within reasonable limits.

In order to avoid this technical complexity, there is MJML. With it, you don't write HTML directly but use custom tags, which are converted to HTML. In this translation step, the mjml2html engine ensures that the used CSS options and layouts can be displayed in as many email clients as possible. Specifically, this means that you don't have to worry about table structures anymore. The mjml2html converter translates for instance <mj-button>Click me<mj-button> into a markup of divs and tables that is compatible with the vast majority of clients.

The [MJML docs](https://documentation.mjml.io/) are absolutely fine. There are only a few questions left unanswered here.

Since you simply create HTML emails with MJML, you are not bound to MailJet with it. Even if MJML is developed by MailJet, it is not restricted to it as it is an open-source component. Since it's hard for me to say positive things about the rest of MailJet, this is worth pointing out. :D

Let's get to the very hell of MailJet: their proprietary templating engine.

To be used in combination with MJML, MailJet offers its proprietary handlebar-templating system. This is primarily intended to populate transactional email or marketing emails with names and other more complex information.

It's totally broken, unfortunately. And it's even more broken if you want to use MailJet’s Web UI (please, please don't try!). The UI doesn't allow you to easily convert data or use data types other than string, for example. Not that it gives you propper errors or anything. It just breaks.

Please feel free to use this [MailJet deployment script](https://github.com/lennartzellmer/mailjet-deployment-template) I built instead. It allows easy testing in local development with MJML and deployment to MailJet). You have to familiarize yourself with it a bit because it's not documented yet - but maybe I'll make a blog post about it at some point. For local development, there are great plugins for VS-Code or WebStorm/IntelliJ. Just use that and save yourself a lot of trouble.

In principle, the functionalities are fine. They are just for many applications poorly documented or not documented at all.

## Useful snippets

To preserve a few useful things for my future self I would like to share a few undocumented snippets below.

### Set variables and concatenate strings

Sometimes it can be handy to define variables in advance to centralize more complex logic (e.g. in connection with [mj-include](https://documentation.mjml.io/#mj-include)). Sometimes this can be a bit tricky, but it works with this markup.

``` html
<mj-raw>
  // make sure variable is defined
  {% set greeting = "" %}
  
  // conditinally reassign variable
  {% if var:name:false %}
    {% set greeting = "Hello " + var:name:false + "," %}
  {% else %}
    {% set greeting = "Hello," %}
  {% endif %}
</mj-raw>
```

### Avoid rendering MJ-Raw in the preview

All examples shown on MailJet suggest that MJ-RAW elements are always rendered in the output and only disappear when converting to MailJet. This is super annoying because in development you don't want to see this templating logic. But there is a simple trick. Just pack mj-raw elements into the wrapper component - so they are not printed, but still interpreted logically.

### Formatting dates and timezones from EPOCH seconds

This is how it works:

```
{{ FormatDateTime("[dd.mm](dd.mm).yyyy", ToDate(var:endDate)) }}

{{ FormatDateTimeTZ("[dd.mm](dd.mm).yyyy", ToDate(var:endDate), "+03:00") }}
```

![](https://prismic-io.s3.amazonaws.com/zellmer-dev/75747ca4-034d-40fa-b20f-1847b5856513_Frame+2.png)

### Format currency units

```
{{ FormatNumberLocale("#,##0.00", var:amount/100, "de_DE") }}&#8239;€
```

![](https://images.prismic.io/zellmer-dev/b288db39-7f2b-45e7-91d0-694993d933f4_Frame+3.png?auto=compress,format&rect=2,0,2593,502&w=1400&h=271)

Conclusion
----------

To be fair. Other vendors also have weird template languages. But the documentation and UIs are much better. (e.g. [Sendinblue](https://help.sendinblue.com/hc/en-us/articles/360000946299-About-Sendinblue-Template-Language) or [Mailchimp](https://mailchimp.com/developer/transactional/docs/templates-dynamic-content/#handlebars)). If possible I would try one of these providers in the future. I don't expect much, but at least the user base of these providers is a bit larger - which gives hope.

Email is still a pain. Unfortunately.