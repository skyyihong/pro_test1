#! /usr/bin/python
#-*- coding:utf-8 -*-
#.__author__ = hongyan
# Date:2021/6/25

import time
import copy
print(time.time())
# copy.deepcopy()
def fn ():
    print("1")
    return None
fn()
a=copy.deepcopy(fn)
print(a)

