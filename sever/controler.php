<?php

class Request
{
    public $reId;
    public $pName;
    public $pLanguage;
    public $category;
    public $imagesLink;
    public $videoLink;
    public $price;
    public $info;
    public $tRequest;
    public $private;
}

class Share extends Request
{
    public $shId;
    public $subLink;
    public $tShare;
    public $rate;
}

