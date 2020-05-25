<?php

require_once '../config/main.php';
require_once '../core/EntityModel.php';
require_once '../core/Api.php';

$model = new EntityModel($db,$table);