DROP DATABASE IF EXISTS Tastie;
CREATE DATABASE IF NOT EXISTS Tastie;
--   CHARACTER SET latin1
--   COLLATE latin1_swedish_ci;
USE Tastie;

CREATE TABLE `User`
(
	user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	first_name NVARCHAR(50),
	last_name NVARCHAR(50),
    gender TINYINT, # 0 là nữ, 1 là nam 
    birthday DATE,
	email VARCHAR(90) UNIQUE,
	phone CHAR(10) UNIQUE NOT NULL UNIQUE,
	`password` VARCHAR(100) NOT NULL,
	`role` TINYINT,  # 1 là customer, 2 là provider, 3 là shipper
    
    #merchant_token VARCHAR(200),
    user_token VARCHAR(200),
	registered_at DATE,
	last_login_at DATE,
	CHECK (REGISTERED_AT >= LAST_LOGIN_AT),
	update_at TIMESTAMP,
	delete_at DATE
	#CHECK (REGISTERED_AT >= UPDATE_AT AND REGISTERED_AT >= DELETE_AT),
	#CHECK (UPDATE_AT >= DELETE_AT),	
);

CREATE TABLE CustomerAddress
(
	customer_id BIGINT NOT NULL,
	address NVARCHAR (60) NOT NULL, 
	city NVARCHAR(35),
    `type` TINYINT,
	longitude VARCHAR (50),
    latitude VARCHAR (50),
	token VARCHAR (200)
);


CREATE TABLE Provider
(
	provider_id BIGINT AUTO_INCREMENT UNIQUE NOT NULL,
    merchant_name NVARCHAR(120),
    address NVARCHAR(150),
	road NVARCHAR(100),
    ward_id INT,
    district_id INT, 
    city_id INT, 
    `description` NVARCHAR(200), 
    keyword NVARCHAR(120), 
    hotline VARCHAR(12), 
    tax_code VARCHAR(50),
    rating TINYINT, 
    total_review INT, 
    price_range INT, 
	avatar VARCHAR(120), 
    cover_picture VARCHAR(120), 
    facade_photo VARCHAR(120), 
    latitude VARCHAR(20), 
    longitude VARCHAR(20), 
    #credit_card_number, 
    erc VARCHAR(30), 
    rush_hour TIME,
	user_id BIGINT NOT NULL UNIQUE,
    owner_id BIGINT, 
	#menu_id BIGINT,
    current_form TINYINT,
    registered_at DATE, 
    update_at TIMESTAMP NOT NULL, 
    delete_at DATE
);

#ALTER TABLE PROVIDER ADD (current_form TINYINT);
#ALTER TABLE PROVIDER ADD ( tax_code VARCHAR(50));

CREATE TABLE MenuPhoto(
	provider_id BIGINT NOT NULL,
    menu_image VARCHAR(120) NOT NULL
);
------------------------------------


CREATE TABLE Operation(
	provider_id BIGINT NOT NULL, 
    `day` NVARCHAR(20) NOT NULL, 
    open_time TIME NOT NULL, 
    close_time TIME NOT NULL, 
    #rush_hour TIME,
	create_at DATE, 
    update_at TIMESTAMP NOT NULL,  
    delete_at DATE
    
);
#ALTER TABLE operation drop update_at;
#ALTER TABLE operation add update_at TIMESTAMP;

CREATE TABLE `Owner`(
	owner_id BIGINT NOT NULL UNIQUE AUTO_INCREMENT, 
    #provider_id BIGINT,
    owner_card_id VARCHAR(20) UNIQUE, 
    owner_phone VARCHAR(12), 
    owner_name NVARCHAR(100), 
    email VARCHAR(90), 
    company_name NVARCHAR(150), 
    company_address NVARCHAR(150), 
    #register_as
    `role` TINYINT, # 1 là invididual, 2 là interprise
	create_at DATE, 
    update_at TIMESTAMP NOT NULL, 
    delete_at DATE
);


ALTER TABLE `Owner` ADD 
(
	id_card_number NVARCHAR(30),
    date_of_issue DATE,
    bank_beneficiary_name NVARCHAR(120),
    bank_account_number VARCHAR(30),
    bank_name NVARCHAR(90),
    bank_province NVARCHAR(50),
    bank_branch NVARCHAR(60)
);

CREATE TABLE OwnerCardImage(
	owner_id BIGINT NOT NULL,
    owner_card_image VARCHAR(120) NOT NULL
); 

CREATE TABLE ProviderCategory (
	provider_category_id INT PRIMARY KEY AUTO_INCREMENT, 
    provider_category_name NVARCHAR(70)
);

CREATE TABLE CuisineCategory (
	cuisine_category_id INT PRIMARY KEY AUTO_INCREMENT, 
    cuisine_category_name NVARCHAR(70)
);

CREATE TABLE ProviderCategoryDetail(
	provider_category_id INT NOT NULL,
    provider_id BIGINT NOT NULL
);

CREATE TABLE CuisineCategoryDetail (
	cuisine_category_id INT NOT NULL, 
    provider_id BIGINT NOT NULL
);

CREATE TABLE MenuCategory (
	menu_id BIGINT NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY, 
	`name` NVARCHAR(120) UNIQUE,
    provider_id BIGINT,
    position SMALLINT
-- 	create_at DATE, 
--     update_at DATE NOT NULL, 
--     delete_at DATE
);
CREATE TABLE MenuCategoryDetail (
	menu_id BIGINT NOT NULL,
    product_id BIGINT NOT NULL
);

-- CREATE TABLE Topping (
-- 	topping_id BIGINT PRIMARY KEY, 
--     product_id BIGINT, 
--     topping_name NVARCHAR(80),  
--     topping_status TINYINT, 
--     `description` NVARCHAR(200), 
--     price DECIMAL(10, 2), 
--     sold_quantity INT, 
-- 	create_at DATE, 
--     update_at DATE, 
--     delete_at DATE
-- );

CREATE TABLE Product
(
	 product_id BIGINT UNIQUE NOT NULL AUTO_INCREMENT, 
     #food_category_id INT, 
     provider_id BIGINT NOT NULL, 
     product_name NVARCHAR(90), 
	 product_status TINYINT,  # 0 là lock by admin, 1 là available, 2 là sold out, 3 là lock by provider
    `description` TEXT, 
     price INT, 
     product_image VARCHAR(150),
     quantity INT, 
     sold_quantity INT, 
     #inventory INT, 
     #Promotion, 
     position SMALLINT,
     rating TINYINT, 
	 create_at DATE, 
     update_at TIMESTAMP NOT NULL, 
     delete_at DATE
);

-- ALTER TABLE Product
--   DROP INDEX update_at;
-- ALTER TABLE `Product` ADD (
-- 	food_category_id INT
-- );

CREATE TABLE ProductOption
(
	product_id BIGINT NOT NULL, 
    label NVARCHAR(100) NOT NULL,
    `value` NVARCHAR(100) NOT NULL,
    price INT
    
);

-- CREATE TABLE ProductOptionDetail
-- (
-- 	product_option_id INT NOT NULL UNIQUE, 
-- 	product_id BIGINT NOT NULL, 
-- 	price INT
-- );

-- ALTER TABLE productoption
--   DROP INDEX product_id ;


CREATE TABLE FoodCategory
(
	food_category_id INT UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    food_category_name NVARCHAR(90),
    main_food_category_id INT
);

CREATE TABLE FoodCategoryDetail
(
	food_category_id INT NOT NULL,
    product_id BIGINT
);

CREATE TABLE MainFoodCategory
(
	main_food_category_id INT UNIQUE NOT NULL AUTO_INCREMENT PRIMARY KEY,
    food_category_name NVARCHAR(90)
);

CREATE TABLE MainFoodCategoryDetail
(
	main_food_category_id INT NOT NULL,
    product_id BIGINT
);

-- #1.000.000
ALTER TABLE `User` AUTO_INCREMENT = 1000000;
ALTER TABLE `Provider` AUTO_INCREMENT = 1000000;
ALTER TABLE `Owner` AUTO_INCREMENT = 1000000;
ALTER TABLE `providercategory` AUTO_INCREMENT = 1000000;
ALTER TABLE cuisinecategory AUTO_INCREMENT = 1000000;
ALTER TABLE `Product` AUTO_INCREMENT = 1000000;
ALTER TABLE `MenuCategory` AUTO_INCREMENT = 1000000;
ALTER TABLE `FoodCategory` AUTO_INCREMENT = 1000000;
ALTER TABLE `MainFoodCategory` AUTO_INCREMENT = 1000000;
#ALTER TABLE ProductOption AUTO_INCREMENT = 1000000;

#-------------------------------
# Customer
ALTER TABLE CustomerAddress ADD CONSTRAINT PK_CustomerAddress PRIMARY KEY (customer_id, address); 
ALTER TABLE CustomerAddress ADD CONSTRAINT FK_Customer_Address foreign key (customer_id) references `User`(user_id);

#provider
ALTER TABLE MenuPhoto ADD CONSTRAINT PK_MenuPhoto PRIMARY KEY (provider_id, menu_image);
ALTER TABLE Operation ADD CONSTRAINT PK_Operation PRIMARY KEY (provider_id, `day`, open_time, close_time, update_at);
#ALTER TABLE Operation ADD UNIQUE `unique_index`(`description`, `value`);

ALTER TABLE Provider ADD CONSTRAINT PK_Provider PRIMARY KEY (provider_id, update_at);
ALTER TABLE Provider ADD CONSTRAINT FK_Owner_owns_Provider foreign key (owner_id) references `Owner`(owner_id);
-- ALTER TABLE Provider ADD CONSTRAINT FK_Provider_belongto_ProviderCategory foreign key (provider_category_id) references `ProviderCategory`(provider_category_id);
-- ALTER TABLE Provider ADD CONSTRAINT FK_Provider_belongto_CuisineCategory foreign key (cuisine_category_id) references `CuisineCategory`(cuisine_category_id);
-- ALTER TABLE Provider ADD CONSTRAINT FK_User_opens_Shop foreign key (user_id) references `User`(user_id);
ALTER TABLE Provider ADD CONSTRAINT FK_User_opens_Shop foreign key (user_id) references `User`(user_id);
# menu
#ALTER TABLE MenuCategory ADD CONSTRAINT PK_MenuCategory PRIMARY KEY (menu_id, update_at);
#ALTER TABLE Provider ADD CONSTRAINT FK_Shop_has_Menu foreign key (menu_id) references `MenuCategory`(menu_id);
ALTER TABLE MenuCategory ADD CONSTRAINT FK_MenuCategory_belongto_Shop foreign key (provider_id) references `Provider`(provider_id);
ALTER TABLE MenuCategoryDetail ADD CONSTRAINT PK_MenuCategoryDetail PRIMARY KEY (menu_id, product_id);
ALTER TABLE MenuCategoryDetail ADD CONSTRAINT FK_Product_belongto_MenuCategory foreign key (product_id) references Product(product_id);
ALTER TABLE MenuCategoryDetail ADD CONSTRAINT FK_MenuCategories_belongto_MenuCategory foreign key (menu_id) references MenuCategory(menu_id);


#provider category
ALTER TABLE ProviderCategoryDetail ADD CONSTRAINT PK_ProviderCategory PRIMARY KEY (provider_id, provider_category_id);
ALTER TABLE ProviderCategoryDetail ADD CONSTRAINT FK_Provider_belongto_ProviderCategory foreign key (provider_id) references Provider(provider_id);
ALTER TABLE ProviderCategoryDetail ADD CONSTRAINT FK_ProviderCategory_contains_Provider foreign key (provider_category_id) references ProviderCategory(provider_category_id);

#cuisine category
ALTER TABLE CuisineCategoryDetail ADD CONSTRAINT PK_CuisineCategory PRIMARY KEY (provider_id, cuisine_category_id);
ALTER TABLE CuisineCategoryDetail ADD CONSTRAINT FK_Provider_belongto_CuisineCategory foreign key (provider_id) references Provider(provider_id);
ALTER TABLE CuisineCategoryDetail ADD CONSTRAINT FK_CuisineCategory_contains_Provider foreign key (cuisine_category_id) references CuisineCategory(cuisine_category_id);

#owner
ALTER TABLE `Owner` ADD CONSTRAINT PK_Owner PRIMARY KEY (owner_id, update_at);
ALTER TABLE `OwnerCardImage` ADD CONSTRAINT PK_OwnerCardImage PRIMARY KEY (owner_id, owner_card_image);
#ALTER TABLE `Owner` ADD CONSTRAINT FK_Provider_belongto_Owner foreign key (provider_id) references `Provider`(provider_id);

#product
ALTER TABLE Product ADD CONSTRAINT PK_Product PRIMARY KEY (product_id, update_at);
-- ALTER TABLE Product ADD CONSTRAINT FK_Product_belongto_MenuCategory foreign key (menu_id) references MenuCategory(menu_id);


#product option detail
ALTER TABLE ProductOption ADD CONSTRAINT PK_ProductOption PRIMARY KEY (product_id, value, label);
ALTER TABLE ProductOption ADD CONSTRAINT FK_ProductOption_Of_Product foreign key (product_id) references `Product`(product_id);

#ALTER TABLE ProductOptionDetail ADD CONSTRAINT FK_Product_Has_ProductOption foreign key (product_option_id) references `ProductOption`(product_option_id);
-- ALTER TABLE ProductOption ADD UNIQUE `unique_index`(`label`, `value`);

#FoodCategory
ALTER TABLE FoodCategory ADD CONSTRAINT FK_FoodCategory_belongto_MainFoodCategory foreign key (main_food_category_id) references `MainFoodCategory`(main_food_category_id);
ALTER TABLE FoodCategoryDetail ADD CONSTRAINT PK_FoodCategoryDetail PRIMARY KEY (product_id, food_category_id);
ALTER TABLE FoodCategoryDetail ADD CONSTRAINT FK_FoodCategoryDetail_links_FoodCategory foreign key (food_category_id) references `FoodCategory`(food_category_id);
ALTER TABLE FoodCategoryDetail ADD CONSTRAINT FK_Product_links_FoodCategoryDetail foreign key (product_id) references `Product`(product_id);

ALTER TABLE MainFoodCategoryDetail ADD CONSTRAINT PK_MainFoodCategoryDetail PRIMARY KEY (product_id, main_food_category_id);
ALTER TABLE MainFoodCategoryDetail ADD CONSTRAINT FK_MainFoodCategoryDetail_links_FoodCategory foreign key (main_food_category_id) references `MainFoodCategory`(main_food_category_id);
ALTER TABLE MainFoodCategoryDetail ADD CONSTRAINT FK_Product_links_MainFoodCategoryDetail foreign key (product_id) references `Product`(product_id);

#----------------------------------------------------------------------



-- ###Dummy data
INSERT INTO `User`(phone, `password`,`role`, email, first_name, last_name, gender, birthday, registered_at, update_at,last_login_at, delete_at)
VALUES  ('1111111111', 'AAAAAA', 1,NULL, 'Customer 1', NULL, NULL, NULL, NULL, NOW(), NULL, NULL),
		('222222222', 'BBBBBB', 1,'B@gmail.com', 'Ty', 'Teo', NULL,NULL, NULL, NOW(), NULL, NULL),
		('333333333', 'CCCCCC', 1,NULL, 'Customer 3', NULL, NULL, NULL, NULL, NOW(), NULL, NULL);
 
 
 
INSERT INTO CustomerAddress(customer_id, address, city, `type`)
VALUES (1000001, N'227 Nguyễn Văn Cừ, Q5', N'TPHCM', NULL),
		(1000001, N'1 Nguyễn Văn Trỗi, Q.Phú Nhuận', N'TPHCM', NULL);
        
INSERT INTO `Provider` (update_at, user_id) VALUES (1000000,1000000);
        
INSERT INTO `mainfoodcategory` (`main_food_category_id`,`food_category_name`) VALUES (1000000,'Đồ uống');
INSERT INTO `mainfoodcategory` (`main_food_category_id`,`food_category_name`) VALUES (1000001,'Đồ khô');
INSERT INTO `mainfoodcategory` (`main_food_category_id`,`food_category_name`) VALUES (1000002,'Đồ nước');

INSERT INTO `cuisinecategory` (`cuisine_category_id`,`cuisine_category_name`) VALUES (1000000,'Tây');
INSERT INTO `cuisinecategory` (`cuisine_category_id`,`cuisine_category_name`) VALUES (1000001,'Á');
INSERT INTO `cuisinecategory` (`cuisine_category_id`,`cuisine_category_name`) VALUES (1000002,'Âu');
INSERT INTO `foodcategory` (`food_category_id`,`food_category_name`,`main_food_category_id`) VALUES (1000000,'Trà Sữa',1000000);
INSERT INTO `foodcategory` (`food_category_id`,`food_category_name`,`main_food_category_id`) VALUES (1000001,'Coffee',1000000);
INSERT INTO `foodcategory` (`food_category_id`,`food_category_name`,`main_food_category_id`) VALUES (1000002,'alcohol',1000000);
INSERT INTO `menucategory` (`menu_id`,`name`,`provider_id`,`position`) VALUES (1000001,'Pick for you',1000000,1);
INSERT INTO `menucategory` (`menu_id`,`name`,`provider_id`,`position`) VALUES (1000002,'Fast',1000000,3);
INSERT INTO `menucategory` (`menu_id`,`name`,`provider_id`,`position`) VALUES (1000003,'Yum Yum',1000000,2);
INSERT INTO `providercategory` (`provider_category_id`,`provider_category_name`) VALUES (1000000,'Nhanh');
INSERT INTO `providercategory` (`provider_category_id`,`provider_category_name`) VALUES (1000001,'24h');
INSERT INTO `providercategory` (`provider_category_id`,`provider_category_name`) VALUES (1000002,'Sang trọng');

INSERT INTO `Product` (`product_id`,`provider_id`,`product_name`,`product_status`,`description`,`price`,`quantity`,`sold_quantity`,`position`,`rating`,`create_at`,`update_at`,`delete_at`) VALUES (1000000,1000001,'trà',1,'uống zô mất ngủ',5,100,6,2,4,'2021-01-01', NOW(),NULL);
INSERT INTO `Product` (`product_id`,`provider_id`,`product_name`,`product_status`,`description`,`price`,`quantity`,`sold_quantity`,`position`,`rating`,`create_at`,`update_at`,`delete_at`) VALUES (1000001,NULL,'nước',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NOW(),NULL);
INSERT INTO `Product` (`product_id`,`provider_id`,`product_name`,`product_status`,`description`,`price`,`quantity`,`sold_quantity`,`position`,`rating`,`create_at`,`update_at`,`delete_at`) VALUES (1000002,NULL,'bánh',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NOW(),NULL);
INSERT INTO `Product` (`product_id`,`provider_id`,`product_name`,`product_status`,`description`,`price`,`quantity`,`sold_quantity`,`position`,`rating`,`create_at`,`update_at`,`delete_at`) VALUES (1000003,NULL,'trái cây',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NOW(),NULL);
INSERT INTO `Product` (`product_id`,`provider_id`,`product_name`,`product_status`,`description`,`price`,`quantity`,`sold_quantity`,`position`,`rating`,`create_at`,`update_at`,`delete_at`) VALUES (1000004,NULL,'cái gì nhỉ',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NOW(),NULL);
INSERT INTO `Product` (`product_id`,`provider_id`,`product_name`,`product_status`,`description`,`price`,`quantity`,`sold_quantity`,`position`,`rating`,`create_at`,`update_at`,`delete_at`) VALUES (1000005,NULL,'kẹo',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NOW(),NULL);



-- ALTER TABLE Operation DROP COLUMN rush_hour;
-- ALTER TABLE Provider ADD (rush_hour TIME);

-- ALTER TABLE `Owner` DROP INDEX owner_card_id ;

-- ALTER TABLE Owner ADD (update_at TIMESTAMP);
-- ALTER TABLE `Owner` ADD (provider_id BIGINT) ;
#ALTER TABLE Provider DROP FOREIGN KEY FK_Owner_owns_Provider;
