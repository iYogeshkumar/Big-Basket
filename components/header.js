const createHeader = async () => {

    // create a div with id = header and otherwise it won't work
    // appended in header_dropdown.js

    return `
                <div id="mupper">
                    <div id="mgrid">
                        <div><i class="fa-solid fa-phone"></i>1860 123 1000</div>
                        <div> 
                            <select name="" id="">
                                <option value=""><i class="fa-solid fa-phone"></i>Bangalore</option>
                                <option value=""><i class="fa-solid fa-phone">Agra</i></option>
                                <option value=""><i class="fa-solid fa-phone">Ahmedabad</i></option>
                                <option value=""><i class="fa-solid fa-phone">Delhi</i></option>
                                <option value=""><i class="fa-solid fa-phone">Pune</i></option>
                                <option value=""><i class="fa-solid fa-phone">Mumbai</i></option>
                                <option value=""><i class="fa-solid fa-phone">Nagpur</i></option>
                                <option value=""><i class="fa-solid fa-phone">Noida</i></option>
                            </select>
                        </div>
                        <div id="mlogin"><i class="fa-solid fa-user-large"></i> Login/Sign Up </div>  
                    </div>
                </div>
                <div id="mmiddle">
                    <div id="mlogo">
                        <img id="mlogoimg" src="https://d3t4kadguw9jug.cloudfront.net/uploads/stores/big-basket-logopng-1562824429.png">
                    </div>
                    <div id="msebar" class="mflex">
                        <div class="mtopmerg">
                            <input type="text" placeholder="Search for Products..." class="minputsearch">
                            <button class="msearchbtn"> <i class="fa-solid fa-magnifying-glass miconsearch"></i></button>
                        </div>
                    </div>
                    <div id="mbasketdiv">
                        <div>
                            <button id="mbasket" class="mflex mborder">
                                <i class="fa-solid fa-basket-shopping" id="miconbasket"></i>                         
                            </button>        
                        </div>
                        <div class="mbasketText">
                            <p>My Basket</p>
                            <p id="m_cartCount">
                                0 items
                            </p>
                        </div>    <!-- <b> My Basket<br><p id="mcount">0</p> item</b> -->
                    </div>
                </div>

                <div id="p_categoryHeaders">
                    <a href="#" id="p_categoryDropdown">
                        SHOP BY CATEGORY
                        <i class="fa-solid fa-angle-down" id="p_dropdownIcon"></i>
                    </a>
                    <a href="index.html" class="p_offerLinks">
                        <i class="fa-solid fa-tag mtag miconhover"></i>
                        OFFERS
                    </a>
                    <a href="#" class="p_offerLinks">
                        <i class="fa-solid fa-motorcycle"></i>
                        BB Express
                    </a>
                </div>
                <div id="p_categoryMegaContainer" class=".p_categoryBox">
                    <div id="p_categoryContainer">
                        <div id="p_mainCategory">
                            <ul>
                                <li> <a class="p_category" href="#" name="fruits">Fruits & Vegetables</a> </li>
                                <li> <a class="p_category" href="#" name="foodgrains">Foodgrains, Oil & Masala</a> </li>
                                <li> <a class="p_category" href="#" name="bakery">Bakery, Cakes & Dairy</a> </li>
                                <li> <a class="p_category" href="#" name="eggs">Eggs, Meat & Fish</a> </li>
                                <li> <a class="p_category" href="#" name="beverages">Beverages</a> </li>
                                <li> <a class="p_category" href="#" name="snacks">Snacks & Branded Foods</a> </li>
                                <li> <a class="p_category" href="#" name="beauty">Beauty & Hygiene</a> </li>
                                <li> <a class="p_category" href="#" name="cleaning">Cleaning & HouseHold</a> </li>
                                <li> <a class="p_category" href="#" name="kitchen">Kitchen,Garden & Pets </a> </li>
                                <li> <a class="p_category" href="#" name="gourmet">Gourmet & World Foods</a> </li>
                                <li> <a class="p_category" href="#" name="babycare">Baby Care</a> </li>
                                <li> <a class="p_category" href="#" name="viewall">View All</a> </li>
                            </ul>
                        </div>
                        <div id="p_subCategory1"></div>
                        <div id="p_subCategory2"></div>
                        <div id="p_subCategory3"></div>
                        <div id="p_subCategory4"></div>
                    </div>
                </div>`
}

export default createHeader;