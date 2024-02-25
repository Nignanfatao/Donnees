else if (group.action == 'add' && (await recupevents(group.id, "neowelcome") == 'oui')) {
                let membres = group.participants;
                for (let membre of membres) {
                let msg = `@${membre.split("@")[0]} Bienvenue🙂 💙 : *Remplis les 3️⃣ Étapes en conditions dans la description*, puis après passe prendre ta première card de combat

░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
                             🔷𝗡Ξ𝗢24🏆🔝 \n`;
     zk.sendMessage(group.id, { image: { url: "https://telegra.ph/file/7c2cb8ff44a0bc3338cdc.jpg" }, caption: msg, mentions: membres });
                }
                }
