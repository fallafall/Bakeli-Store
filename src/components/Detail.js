import React from "react";
import Rectangle3 from "../imgs/Rectangle3.png";

function Detail() {
  return (
    <div className="container">
      <h1 className="title">Universal icons community</h1>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mb-3 mt-5">
          <div className="card ">
            <img
              className="card-img-top mon-image"
              src={Rectangle3}
              alt="Card image cap"
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5">
          <fom className="form2">
            <div className="mb-3">
              <input
                type="textarea"
                className="form-control textarea w-100"
                id="exampleFormControlInput1"
                placeholder="Commenter ici..."
              />
            </div>
            <button type="btn" className="bouton2 w-100 ">
              Envoyer
            </button>
          </fom>
        </div>
      </div>

      <h3 className="title3">
        Lenka-Creative Digital Agency Elementor Template Kit
      </h3>

      <p>
        created especially for Digital Agency, Creative Agency, Designers,
        Freelancers, and online portfolios for <br/>companies or individuals. Lenka
        has a simple, modern and clean design with 100% responsive layout, and{" "}
        <br /> very easy to customize and can be used by anyone without having
        to understand coding.
        <br />
        This template kit includes stunning carefully crafted 15 Pages and 18
        stunning Templates, you can build <br /> your professional-looking
        website juste a click away.
      </p>
      <h3 className="title3"> Features</h3>
      <ul>
        <li>Using Free Elementor (Elementor Pro is not required)</li>
        <li>Unique & Clean Design</li>
        <li>15 Ready to Use Pages</li>
        <li>18 Ready to Use Templates</li>
        <li>Fully Responsive Layout</li>
        <li>Fully Customisable</li>
        <li>Cross Browser Compatibility:Chrome,Firefox, Safari, Opera</li>
      </ul>
      <h3 className="title3">Template Include</h3>
      <ul>
        <li>Global Theme Style </li>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Services Detail</li>
        <li>Projets</li>
        <li>Projet Detail</li>
        <li>Coming Soon</li>
        <li>FAQs</li>
        <li>Pricing</li>
        <li>Team</li>
        <li>Single Team</li>
        <li>Blog</li>
      </ul>
      <h3 className="title3">How to Install:</h3>
      <p>
        1. Install and Activate the Envato Elemets plugin from pligins &gt Add
        New in WorldPress
        <br />
        2. Download your Kit file and Do not unZip
        <br />
        3. Go to Elements Install kits and click the Upload Template kit
        button.You may aport under Elements &lt Template Kits.
        <br />
        4. Check for the orange banner at the top and click Install Requirement
        to load any plugins the kit uses
        <br />
        5. Click import on the Global Kit Styles first
        <br />
        6. Click import on one template at a time. These are stored in Elementor
        under Templates &gt Saved Templates.
        <br />
        7. Go to Pages and create a new page and click Edit with Elementor
      </p>
      <h3 className="title3">Setup Global Header and Footer in ElementsKit</h3>
      <p>
        1. Import the header and footer template
        <br />
        2. Go to ElementsKit &gt Header Footer select Header and click add New
        <br />
        3. Give it a title , leave Entire Site selected and toggle Activation to
        On <br />
        4. Click the template title and Edit Content
        <br />
        5. Click the gray folder icon and select the header template to import
        and Update
        <br />
        6. Repeat for Footer
      </p>
      <h3 className="title3">Balises de produit</h3>
      <button className="text-muted publicité">Publicite</button>
    </div>
  );
}

export default Detail;
