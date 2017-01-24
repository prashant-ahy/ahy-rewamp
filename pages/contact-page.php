<div class="container-fluid height-fullscreen web-view no-padding">
  <div class="contact-wrapper">
    <section id="video-wrapper" class="col-md-6 col-lg-6 hidden-xs hidden-sm smooth move-up">
      <div class="contact-video-container">
        <video class="contact-video" preload="auto" autoplay="autoplay" loop="loop" muted="muted" volume="0">
  	        <source src="video/ahynew1.mp4" type="video/mp4">
            <source src="video/ahynew1.webm" type="video/webm">
            <source src="video/ahynew1.ogg" type="video/ogg ogv" ;="" codecs="theora, vorbis">
                Your browser does not support the video tag.
        </video>
      </div>
    </section>
    <section id="contact-form-wrapper" class="col-sm-12 col-md-6 col-lg-6 col-xs-12 smooth move-down">
      <div class="form-wrapper">
          <div class="form-heading-text">
            <span class="form-heading smooth active" data-target="1">say hey</span>
            <span class="form-heading smooth" data-target="2">Hire us</span>
          </div>
          <div class="form-inner">
            <div class="form-say-hey absolute smooth" data-attr="1">
              <form method="post" action="" id="say-hey">
                  <fieldset>
                      <div class="row-fluid ">
                          <input class="first-field  smooth pull-left" type="text" placeholder="Your Name" pattern="[a-zA-Z]+" name="username" id="name" maxlength="20" required="" title="Text only">
                          <input class="first-field  smooth pull-right" type="email" placeholder="Your Email" name="email" id="email_id" maxlength="40" required="">
                      </div>
                      <div class="row-fluid">
                          <textarea class="second-field  smooth pull-left " cols="" "10"="" placeholder="Type anything here" name="text" id="textbody" maxlength="100"></textarea>
                      </div>
                      <div class="row-fluid">
                          <input class="third-field  smooth pull-left" type="text" placeholder="How much is 2 + 2?" id="inputanswer" name="answer" maxlength="1" required="" pattern="[0-9]+" title="Numbers only" oninput="security(this);">
                      </div>
                      <div class="row-fluid">
                        <input type="hidden" name="form" value="1">
                          <button id="submit" name="submit" class="btn-circle-red say-hey" value="submit">
                              <span class="btn-text">Send</span>
                          </button>
                      </div>
                  </fieldset>
              </form>
            </div>
            <div class="form-hire-us absolute smooth scale-hide" data-attr="2">
              <form action="" method="post" class="contact-form-quote submitted" id="hire-us">
                  <fieldset>
                      <div class="row-fluid">
                          <input class="first-field smooth pull-left" type="text" placeholder="Your Name" pattern="[a-zA-Z]+" name="username" id="name" maxlength="20" required="" title="Text only">
                          <input class="first-field smooth pull-right" type="email" placeholder="Your Email" name="email" id="email_id" maxlength="40" required="" title="Emails only">
                      </div>
                      <div class="row-fluid">
                          <input class="first-field smooth pull-left" id="clientwebsite" name="number" type="tel" pattern="^\d{2}\d{4}\d{4}$" placeholder="Phone Number(9123456789)" required="" title="'9123456789' Numbers only" >
                          <label id="project-type" class="ddl-handle first-field anchor pull-right">

                              <select name="scope" id="projectScope" title="Choose project scope" required="" class="">
                                  <option disabled="" selected="" value="">Choose project scope</option>
                                  <option value="Design">Design</option>
                                  <option value="Code">Code</option>
                                  <option value="Design + code">Design + code</option>
                                  <option value="Other, I'll explain below">Other, I'll explain below</option>
                              </select>
                          </label>
                      </div>
                      <div class="row-fluid">
                          <label id="project-budget" class="ddl-handle first-field smooth anchor pull-right" aria-required="true">

                              <select name="budget" id="projectBudget" title="Choose project budget" required="">
                                  <option disabled="" selected="" value="">Choose project budget</option>
                                  <option value="300000 INR">Less than 100,000 INR</option>
                                  <option value="300000 INR">300,000 INR</option>
                                  <option value="300000 - 1000000 INR">300000 - 1000000 INR</option>
                                  <option value="+1000000+ INR">+1000000+ INR</option>
                              </select>
                          </label>
                          <label id="project-timeframe" class="ddl-handle first-field smooth anchor">

                              <select name="timeframe" id="projectTimeFrame" title="Choose project timeframed" required="">
                                  <option disabled="" selected="" value="">Choose project timeframe</option>
                                  <option value="Not sure yet">Not sure yet</option>
                                  <option value="1 - 6 months">1 - 6 months</option>
                                  <option value="6+ months">6+ months</option>
                                  <option value="Other, I'll explain below">Other, I'll explain below</option>
                              </select>
                          </label>
                      </div>
                      <div class="row-fluid">
                          <textarea class="second-field smooth" id="projectDetails" name="projectdetails" cols="10" placeholder="Anything else we should know?" maxlength="100"></textarea>
                      </div>
                      <div class="row-fluid ">
                          <input class="third-field smooth pull-left" id="inputAnswer" name="answer" type="text" placeholder="How much is 2 + 2?" value="" required="" aria-required="true" maxlength="1" pattern="[0-9]+" title="Numbers only" oninput="security(this);">
                      </div>
                      <div class="row-fluid">
                        <input type="hidden" name="form" value="2">
                          <button id="submit" name="submit" class="btn-circle-red hire-us" type="submit">
                              <span class="btn-text">Send</span>
                          </button>
                      </div>
                  </fieldset>
              </form>
            </div>
          </div>
      </div>
    </section>
  </div>
</div>
