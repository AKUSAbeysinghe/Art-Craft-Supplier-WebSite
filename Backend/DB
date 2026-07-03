-- ART_CRAFT_DB

-- Create Database
CREATE DATABASE IF NOT EXISTS ART_CRAFT_DB 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

-- Use the database
USE ART_CRAFT_DB;

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

-- 2. Subcategories Table
CREATE TABLE IF NOT EXISTS subcategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100),
    description TEXT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- 3. Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    sub_category_id INT NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(255),
    popular BOOLEAN DEFAULT FALSE,
    stock INT DEFAULT 0,
    status ENUM('active','inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (sub_category_id) REFERENCES subcategories(id) ON DELETE CASCADE
);

-- 4. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =============================================
-- INSERT CATEGORIES
-- =============================================
INSERT INTO categories (name, slug) VALUES
('Papers', 'papers'),
('Brushes', 'brushes'),
('Pens', 'pens'),
('Pigments', 'pigments')
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug);

-- =============================================
-- INSERT SUBCATEGORIES
-- =============================================
INSERT INTO subcategories (category_id, name, slug, description) VALUES
-- Papers (category 1)
(1, 'Drawing Papers', 'drawing-papers', NULL),
(1, 'Painting Papers', 'painting-papers', NULL),
(1, 'Craft Papers', 'craft-papers', NULL),
(1, 'Cardstock & Specialty Papers', 'cardstock-specialty-papers', NULL),
(1, 'Printing & Photo Papers', 'printing-photo-papers', NULL),

-- Brushes (category 2)
(2, 'Paint Brushes', 'paint-brushes', NULL),
(2, 'Watercolor Brushes', 'watercolor-brushes', NULL),
(2, 'Acrylic & Oil Brushes', 'acrylic-oil-brushes', NULL),
(2, 'Craft & Decorative Brushes', 'craft-decorative-brushes', NULL),
(2, 'Specialty Brushes', 'specialty-brushes', NULL),

-- Pens (category 3)
(3, 'Drawing Pens', 'drawing-pens', NULL),
(3, 'Fineliner Pens', 'fineliner-pens', NULL),
(3, 'Brush Pens', 'brush-pens', NULL),
(3, 'Calligraphy Pens', 'calligraphy-pens', NULL),
(3, 'Paint Pens', 'paint-pens', NULL),
(3, 'Metallic Pens', 'metallic-pens', NULL),

-- Pigments (category 4)
(4, 'Watercolor Pigments', 'watercolor-pigments', NULL),
(4, 'Acrylic Pigments', 'acrylic-pigments', NULL),
(4, 'Oil Pigments', 'oil-pigments', NULL),
(4, 'Natural Earth Pigments', 'natural-earth-pigments', NULL),
(4, 'Metallic Pigments', 'metallic-pigments', NULL),
(4, 'Mica Pigments', 'mica-pigments', NULL),
(4, 'Fluorescent Pigments', 'fluorescent-pigments', NULL)
ON DUPLICATE KEY UPDATE 
    name = VALUES(name),
    slug = VALUES(slug);



