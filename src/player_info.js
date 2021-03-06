///用户数据结构
function playerInfo()
{
    this.UserId = 0; //0-4
    this.UserName = ""; //5-
    this.Pinyins = ""; //chengyu
    this.Time = 0; //

    this.Parse = function(VarTypeUser)
    {
        for (var i=0;i<VarTypeUser.length;i++)
        VarTypeUser[i] = String.fromCharCode(VarTypeUser.charCodeAt(i)^0xFFFF);
        this.UserId = VarTypeUser.substr(0,4); //0-4
        this.UserName = VarTypeUser.substr(5); //4--
    }
    this.ToString = function()
    {
        var str = this.UserId.toString();
        while (str.length < 5)
        {
            str += "\u0000";
        }
        str += this.UserName;
        for (var i=0;i<str.length;i++)
        {
            str[i] = String.fromCharCode(str.charCodeAt(i)^0xFFFF);
        }
        return str;
    }
}

function player(playername, words, time)
{
    var playerinfo = new playerInfo();
    this.playerinfo = playerinfo;
    playerinfo.UserName = playername;
    playerinfo.Pinyins = words;
    playerinfo.Time = time;
    this.index = 0;
    
    this.UserName = function(){
        return playerinfo.UserName;
    }

    this.Pinyins = function() {
        return playerinfo.Pinyins;
    }
    this.PinyinArray = function()
    {
        var arr = playerinfo.Pinyins.split(",");
		return arr;
    }
    
    this.Time = function(){
        return playerinfo.Time;
    }
}