CREATE DATABASE prelauncher;

CREATE TABLE shopify_sessions (
    id varchar(255) NOT NULL PRIMARY KEY,
    shop varchar(255) NOT NULL,
    state varchar(255) NOT NULL,
    isOnline boolean NOT NULL,
    expires integer,
    scope varchar(255),
    accessToken varchar(255),
    onlineAccessInfo varchar(255)
);

-- CREATE TABLE campaigns (
--     campaign_id 
-- )