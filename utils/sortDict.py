#!/usr/bin/python
# -*- coding: utf-8 -*-
from UserDict import UserDict


class CDict(UserDict):

    def __init__(self, lstVal=None):
        UserDict.__init__(self)
        self.lstKey = []
        for key, val in lstVal:
            if key not in self.lstKey:
                self.lstKey.append(key)
            self.data[key] = val

    def __setitem__(self, key, item):
        if key not in self.lstKey:
            self.lstKey.append(key)
        self.data[key] = item

    def __delitem__(self, key):
        self.lstKey.remove(key)
        del self.data[key]

    def clear(self):
        del self.lstKey[:]
        self.data.clear()

    def keys(self):
        return self.lstKey

    def items(self):
        lstRet = []
        for key in self.lstKey:
            lstRet.append((key, self.data[key]))

        return lstRet

    def iteritems(self):
        return self.items()

    def update(self, dict):
        self.lstKey.extend(dict.lstKey)
        UserDict.update(self, dict)


    #0:数字排序， 1:字符串排序
    def sortKey(self, type = 0):

        def cmpByInt(a, b):
            return cmp(int(a), int(b))

        if type == 0:
            self.lstKey.sort(cmpByInt)

        elif type == 1:
            self.lstKey.sort()

    def sortVal(self, iSortType):
        pass

    def values(self):
        lstRet = []
        for key in self.lstKey:
            lstRet.append(self.data[key])

        return lstRet

if __name__ == '__main__':
    dit = CDict()
    dit.update({'1':1, '3':3, '2':2, '4':4, '11' : 1})
    dit['aa'] = 'bb'
    #print dit
    #dit['1']