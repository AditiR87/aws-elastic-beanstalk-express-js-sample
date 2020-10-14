$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Eastender.feature");
formatter.feature({
  "line": 2,
  "name": "Verify the Eastenders next Epsoide Time",
  "description": "",
  "id": "verify-the-eastenders-next-epsoide-time",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "check the time of EastEnder next Epsoide via TV button and iplayer search",
  "description": "",
  "id": "verify-the-eastenders-next-epsoide-time;check-the-time-of-eastender-next-epsoide-via-tv-button-and-iplayer-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tvbuttonsearch"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am in HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select the TV option under More option in header",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "iplayer page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"\u003csearch1\u003e\" in search box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on first link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select Programme website",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "check the time for the next episode",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "verify-the-eastenders-next-epsoide-time;check-the-time-of-eastender-next-epsoide-via-tv-button-and-iplayer-search;",
  "rows": [
    {
      "cells": [
        "search1"
      ],
      "line": 14,
      "id": "verify-the-eastenders-next-epsoide-time;check-the-time-of-eastender-next-epsoide-via-tv-button-and-iplayer-search;;1"
    },
    {
      "cells": [
        "EastEnders"
      ],
      "line": 15,
      "id": "verify-the-eastenders-next-epsoide-time;check-the-time-of-eastender-next-epsoide-via-tv-button-and-iplayer-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8523668500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "check the time of EastEnder next Epsoide via TV button and iplayer search",
  "description": "",
  "id": "verify-the-eastenders-next-epsoide-time;check-the-time-of-eastender-next-epsoide-via-tv-button-and-iplayer-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tvbuttonsearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am in HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I select the TV option under More option in header",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "iplayer page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"EastEnders\" in search box",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on first link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select Programme website",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "check the time for the next episode",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSD.i_am_in_HomePage()"
});
formatter.result({
  "duration": 179658433,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSD.i_select_the_TV_option_under_More_option_in_header()"
});
formatter.result({
  "duration": 20705530459,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.linkText: TV (tried for 20 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.pages.HomePage.i_select_the_TV_option_under_More_option_in_header(HomePage.java:28)\n\tat com.stepdefinitionsZTT.HomepageSD.i_select_the_TV_option_under_More_option_in_header(HomepageSD.java:30)\n\tat ✽.When I select the TV option under More option in header(Eastender.feature:7)\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d81.0.4044.92)\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027Varuns-MBP\u0027, ip: \u00272a02:c7f:8aad:5200:3d96:eaa8:f2b4:1b2a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/cm/l0cx4sbx14l...}, goog:chromeOptions: {debuggerAddress: localhost:59324}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 15c7c69b6f384b410035b0931e30265a\n*** Element info: {Using\u003dlink text, value\u003dTV}\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:397)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByLinkText(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByLinkText.findElements(By.java:241)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:358)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:643)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:640)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.pages.HomePage.i_select_the_TV_option_under_More_option_in_header(HomePage.java:28)\n\tat com.stepdefinitionsZTT.HomepageSD.i_select_the_TV_option_under_More_option_in_header(HomepageSD.java:30)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "location": "IplayerSD.iplayer_page_is_opened()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "EastEnders",
      "offset": 9
    }
  ],
  "location": "HomepageSD.i_enter_in_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IplayerSD.i_click_on_first_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "IplayerSD.i_select_Programme_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EeMainPageSD.check_the_time_for_the_next_episode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23619414,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d81.0.4044.92)\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027Varuns-MBP\u0027, ip: \u00272a02:c7f:8aad:5200:3d96:eaa8:f2b4:1b2a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/cm/l0cx4sbx14l...}, goog:chromeOptions: {debuggerAddress: localhost:59324}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 15c7c69b6f384b410035b0931e30265a\n\tat sun.reflect.GeneratedConstructorAccessor11.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:657)\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:486)\n\tat com.stepdefinitionsZTT.Hooks.close(Hooks.java:22)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.before({
  "duration": 4874892795,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "check the time of EastEnder next Epsoide via iPlayer icon",
  "description": "",
  "id": "verify-the-eastenders-next-epsoide-time;check-the-time-of-eastender-next-epsoide-via-iplayer-icon",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@iplayerchannels"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am in HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I select the iPlayer",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on channels on iplayer page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on one",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Eastenders link under soaps",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Programme website",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "check the time for the next episode",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSD.i_am_in_HomePage()"
});
formatter.result({
  "duration": 19945777,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSD.i_select_the_iPlayer()"
});
formatter.result({
  "duration": 2517046794,
  "status": "passed"
});
formatter.match({
  "location": "IplayerSD.i_click_on_channels_on_iplayer_page()"
});
formatter.result({
  "duration": 546661399,
  "status": "passed"
});
formatter.match({
  "location": "IplayerSD.i_click_on_one()"
});
formatter.result({
  "duration": 808884341,
  "status": "passed"
});
formatter.match({
  "location": "IplayerSD.i_click_on_Eastenders_link_under_soaps()"
});
formatter.result({
  "duration": 1351065188,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027Varuns-MBP\u0027, ip: \u00272a02:c7f:8aad:5200:3d96:eaa8:f2b4:1b2a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/cm/l0cx4sbx14l...}, goog:chromeOptions: {debuggerAddress: localhost:59404}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2931d75d5ddfbfb3ba2a4d9aa5318046\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:536)\n\tat com.pages.Iplayer.i_click_on_Eastenders_link_under_soaps(Iplayer.java:78)\n\tat com.stepdefinitionsZTT.IplayerSD.i_click_on_Eastenders_link_under_soaps(IplayerSD.java:36)\n\tat ✽.And I click on Eastenders link under soaps(Eastender.feature:24)\n",
  "status": "failed"
});
formatter.match({
  "location": "IplayerSD.i_select_Programme_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EeMainPageSD.check_the_time_for_the_next_episode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 185047396,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Verify the next Epsoide of EastEnders displayed",
  "description": "",
  "id": "verify-the-eastenders-next-epsoide-time;verify-the-next-epsoide-of-eastenders-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am in HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I enter \"\u003csearch\u003e\" into search textbox",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "search page for \"\u003csearch\u003e\" is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on first search link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select Programme website",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "check the time for the next episode",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "verify-the-eastenders-next-epsoide-time;verify-the-next-epsoide-of-eastenders-displayed;",
  "rows": [
    {
      "cells": [
        "search"
      ],
      "line": 37,
      "id": "verify-the-eastenders-next-epsoide-time;verify-the-next-epsoide-of-eastenders-displayed;;1"
    },
    {
      "cells": [
        "EastEnders"
      ],
      "line": 38,
      "id": "verify-the-eastenders-next-epsoide-time;verify-the-next-epsoide-of-eastenders-displayed;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3937482460,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify the next Epsoide of EastEnders displayed",
  "description": "",
  "id": "verify-the-eastenders-next-epsoide-time;verify-the-next-epsoide-of-eastenders-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@search"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am in HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I enter \"EastEnders\" into search textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "search page for \"EastEnders\" is displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on first search link",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select Programme website",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "check the time for the next episode",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSD.i_am_in_HomePage()"
});
formatter.result({
  "duration": 24632423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EastEnders",
      "offset": 9
    }
  ],
  "location": "HomepageSD.i_enter_into_search_textbox(String)"
});
formatter.result({
  "duration": 2411944087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EastEnders",
      "offset": 17
    }
  ],
  "location": "SearchPageSD.search_page_for_is_displayed(String)"
});
formatter.result({
  "duration": 15741821,
  "status": "passed"
});
formatter.match({
  "location": "SearchPageSD.i_click_on_first_search_link()"
});
formatter.result({
  "duration": 39288415,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"article[data-result-number\u003d\u00271\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027Varuns-MBP\u0027, ip: \u00272a02:c7f:8aad:5200:3d96:eaa8:f2b4:1b2a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: /var/folders/cm/l0cx4sbx14l...}, goog:chromeOptions: {debuggerAddress: localhost:59437}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d5d5882cad5eb47a5bf7d65d17543185\n*** Element info: {Using\u003dcss selector, value\u003darticle[data-result-number\u003d\u00271\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:464)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat com.pages.SearchPage.i_click_on_first_search_link(SearchPage.java:17)\n\tat com.stepdefinitionsZTT.SearchPageSD.i_click_on_first_search_link(SearchPageSD.java:18)\n\tat ✽.And I click on first search link(Eastender.feature:33)\n",
  "status": "failed"
});
formatter.match({
  "location": "IplayerSD.i_select_Programme_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EeMainPageSD.check_the_time_for_the_next_episode()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 178730022,
  "status": "passed"
});
});