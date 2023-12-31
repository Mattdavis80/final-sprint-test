-- Table: public.logins

-- DROP TABLE IF EXISTS public.logins;

CREATE TABLE IF NOT EXISTS public.logins
(
    id integer NOT NULL DEFAULT nextval('logins_id_seq'::regclass),
    username character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.logins
    OWNER to postgres;