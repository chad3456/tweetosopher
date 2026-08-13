---
id: luxury-beliefs
title: Luxury Beliefs
category: theory
tradition: contemporary-critique
philosophers:
  - Rob Henderson
  - Thorstein Veblen
era: "2019"
tags: [status, class, signalling, elites, policy, hypocrisy]
sources:
  - author: Rob Henderson
    title: "'Luxury beliefs' are the latest status symbol for rich Americans"
    published: New York Post
    year: 2019
  - author: Rob Henderson
    title: "Troubled: A Memoir of Foster Care, Family, and Social Class"
    published: Gallery Books
    year: 2024
  - author: Thorstein Veblen
    title: The Theory of the Leisure Class
    published: Macmillan
    year: 1899
  - author: Charles Murray
    title: "Coming Apart: The State of White America, 1960–2010"
    published: Crown Forum
    year: 2012
  - author: Michael J. Sandel
    title: "The Tyranny of Merit: What's Become of the Common Good?"
    published: Farrar, Straus and Giroux
    year: 2020
  - author: Musa al-Gharbi
    title: "We Have Never Been Woke: The Cultural Contradictions of a New Elite"
    published: Princeton University Press
    year: 2024
  - author: Andrew J. Bacevich
    title: "The New American Militarism: How Americans Are Seduced by War"
    published: Oxford University Press
    year: 2005
  - author: Karl Popper
    title: "Conjectures and Refutations: The Growth of Scientific Knowledge"
    published: Routledge
    year: 1963
  - author: John Stuart Mill
    title: On Liberty
    published: John W. Parker and Son
    year: 1859
questions:
  - id: q1
    prompt: >-
      A panel of well-paid professionals recommends a policy they will not live near the
      consequences of. One member, who grew up on the estate the policy affects, says the
      recommendation is a status marker rather than a judgement.
    options:
      - id: a
        label: >-
          She is describing something real. Positions cost their holders nothing here, and
          costless positions get selected for how they sound.
        scores: { virtue: 0.8, consequentialist: 0.5, affect: 0.5 }
        evidence:
          who: Rob Henderson
          work: "'Luxury beliefs' are the latest status symbol for rich Americans"
          year: 2019
          says: >-
            Henderson's argument is that beliefs now serve the status function expensive
            goods once did: a position marks membership in an educated class, while the
            costs of acting on it fall mainly on people without the resources to absorb
            them.
      - id: b
        label: >-
          Even if true, it is not an argument. Whether the policy works is a separate
          question and nobody on the panel has answered it.
        scores: { consequentialist: 0.9, affect: -0.8, certainty: -0.4 }
        evidence:
          who: John Stuart Mill
          work: On Liberty
          year: 1859
          says: >-
            Mill held that an opinion must be met in the strongest form its holders can
            give it, and that facts about who holds an opinion, or why it is comfortable
            for them, settle nothing about whether it is true.
      - id: c
        label: >-
          Her standing matters. The people who bear a policy's cost have a claim to decide
          it that a panel does not.
        scores: { care: 0.8, contractarian: 0.6, authority: 0.5 }
        evidence:
          who: Michael J. Sandel
          work: The Tyranny of Merit
          year: 2020
          says: >-
            Sandel argues that credentialed elites have come to treat their advantage as
            earned and their judgement as expertise, and that this has stripped
            working people of standing in decisions about their own lives.
      - id: d
        label: >-
          Both sides of the table are signalling. Her authenticity is also currency in that
          room, and she is spending it.
        scores: { relativist: 0.8, virtue: 0.4, certainty: -0.6 }
        evidence:
          who: Thorstein Veblen
          work: The Theory of the Leisure Class
          year: 1899
          says: >-
            Veblen treated status display as a general feature of social competition rather
            than a vice of one class, with each stratum signalling by whatever means its
            position makes available.
  - id: q2
    prompt: >-
      The same month, a second proposal comes before the panel: scrapping a safety
      inspection regime on grounds of liberty and cost. Its loudest advocate owns
      properties the regime covers and lives in none of them.
    options:
      - id: a
        label: >-
          Identical structure, identical objection. If the first case was a luxury belief,
          so is this one, and more expensively.
        scores: { deontological: 0.9, scope: 0.7, certainty: 0.5 }
        evidence:
          who: Andrew J. Bacevich
          work: The New American Militarism
          year: 2005
          says: >-
            Bacevich's charge against the American governing class is that it developed an
            enthusiasm for the use of force precisely as its own families stopped serving,
            so the conviction and the exposure came apart.
      - id: b
        label: >-
          Not identical. He has a declared financial interest, which is a conflict the rules
          already know how to handle. Belief-signalling is the harder case because nothing
          is declarable.
        scores: { contractarian: 0.8, consequentialist: 0.5, certainty: 0.4 }
      - id: c
        label: >-
          Worse in one direction only: his position also serves his wallet. Hers merely
          serves her reputation, which is the cheaper corruption.
        scores: { virtue: 0.7, egoist: 0.4, affect: 0.6 }
        evidence:
          who: Adam Smith
          work: The Wealth of Nations
          year: 1776
          says: >-
            Smith held that regulation urged by a body of merchants deserves long
            suspicion, since men with a direct pecuniary interest have on many occasions
            deceived and oppressed the public.
      - id: d
        label: >-
          Run both proposals on their merits and stop auditing motives. The inspection
          regime either prevents injuries or it does not.
        scores: { consequentialist: 1.0, affect: -0.9, agency: 0.5 }
  - id: q3
    prompt: >-
      A researcher asks what evidence would show the theory false. The reply is that a
      belief counts as a luxury belief when its costs fall elsewhere — which is true of
      almost any policy view held by anyone comfortable.
    options:
      - id: a
        label: >-
          Then it is not a theory, it is a rhetorical move. It licenses dismissing any
          position held by an educated person without touching its content.
        scores: { consequentialist: 0.7, certainty: -0.6, affect: -0.7 }
        evidence:
          who: Karl Popper
          work: Conjectures and Refutations
          year: 1963
          says: >-
            Popper's criterion was that a framework which can absorb every possible
            observation as confirmation has thereby stopped saying anything; explanatory
            reach of that kind is a weakness, not a strength.
      - id: b
        label: >-
          It is testable enough. Ask whether advocates practise what they recommend, and
          whether they arrange their own lives to avoid the exposure.
        scores: { consequentialist: 0.8, virtue: 0.5, certainty: 0.4 }
        evidence:
          who: Charles Murray
          work: "Coming Apart: The State of White America, 1960–2010"
          year: 2012
          says: >-
            Murray argued that the new upper class largely practises the older bourgeois
            norms — marriage, work, sobriety — while declining to advocate them, and called
            on it to preach what it practises.
      - id: c
        label: >-
          The sharper version drops motives entirely: ask whose interests a widely held
          view happens to serve, and check.
        scores: { consequentialist: 0.7, relativist: 0.5, affect: -0.5 }
        evidence:
          who: Musa al-Gharbi
          work: "We Have Never Been Woke: The Cultural Contradictions of a New Elite"
          year: 2024
          says: >-
            Al-Gharbi argues that the professional class's social-justice vocabulary has
            functioned to legitimate its own position and to compete for standing within
            it, and makes the case from the group's behaviour rather than its sincerity.
      - id: d
        label: >-
          Unfalsifiable and still worth having. Some concepts are lenses rather than
          hypotheses, and you judge them by what they let you notice.
        scores: { virtue: 0.6, relativist: 0.6, certainty: -0.7 }
  - id: q4
    prompt: >-
      A man who spent his childhood in care says the elite deprecation of stable family
      structure was affordable for the people saying it and not for him. A colleague replies
      that his experience cannot settle a policy question.
    options:
      - id: a
        label: >-
          The colleague is right about method and is using it to avoid the point. The
          testimony is evidence about costs, which is exactly what was missing.
        scores: { care: 0.8, consequentialist: 0.5, affect: 0.6 }
        evidence:
          who: Rob Henderson
          work: "Troubled: A Memoir of Foster Care, Family, and Social Class"
          year: 2024
          says: >-
            Henderson's account draws the argument from his own passage through foster care
            into an elite university, contending that the instability treated as a lifestyle
            question by his classmates had been the central fact of his childhood.
      - id: b
        label: >-
          The colleague is right, full stop. One life is a sample of one, and policy built
          from vivid cases is how bad policy gets made.
        scores: { consequentialist: 0.9, affect: -0.9, scope: 0.6 }
      - id: c
        label: >-
          His experience is authoritative about what happened to him and not about what
          should be done, and those two are being deliberately blurred by whoever finds it
          convenient.
        scores: { deontological: 0.7, certainty: 0.5, affect: -0.5 }
      - id: d
        label: >-
          The disagreement is not about evidence. They want different things and the
          argument about method is a proxy for that.
        scores: { relativist: 0.7, existentialist: 0.4, certainty: -0.6 }
outcomes:
  - id: does-it-work
    dominant: consequentialist
    label: Judge the Policy, Not the Panel
    text: >-
      You keep pulling the argument back to whether the thing works and who it hurts, and
      you treat motive-auditing as a distraction that both sides use when their case is
      weak. That is the most defensible position in the room and the least satisfying one.
      Its exposure is that motives are not nothing: if positions really are selected for
      how they sound among people who never feel their effects, then the pool of proposals
      you are evaluating on the merits has already been filtered before you got it.
    base_rate: null
  - id: the-cost-falls-elsewhere
    dominant: care
    label: Who Absorbs It
    text: >-
      You start from the person who will live with the result, and you treat their account
      as evidence rather than colour. That is the honest core of Henderson's argument and it
      survives every objection to the concept's looser uses. What it costs you is that
      testimony does not aggregate: the people who bear a policy's cost disagree with each
      other, and choosing which of them to listen to puts the judgement back in your hands
      while letting you say it was theirs.
    base_rate: null
  - id: the-same-audit-both-ways
    dominant: deontological
    label: The Same Audit Both Ways
    text: >-
      You will run the test on the landlord and the panellist alike, and you notice when a
      concept is being issued to one side as ammunition. That symmetry is what turns this
      from a slogan into an instrument. The price is that it is exhausting and it disarms
      you: applied consistently, almost everyone advocating almost anything is insulated
      from some part of it, and a standard that convicts everybody stops sorting anybody.
    base_rate: null
  - id: what-the-position-makes-of-you
    dominant: virtue
    label: What the Position Makes of You
    text: >-
      You think a belief you never have to live under is a different kind of thing from one
      you do, and that holding the first while calling it courage does something to a person.
      Murray and Henderson are with you; so, from the left, is al-Gharbi. The exposure is
      that this reasoning is a genetic fallacy with good manners — the comfort of the holder
      is not evidence about the claim, and you will eventually use it to avoid an argument
      you could have lost on the facts.
    base_rate: null
  - id: everyone-is-signalling
    dominant: relativist
    label: Everyone Is Signalling
    text: >-
      You see the status economy running on all sides of the table, including in the woman
      spending her authenticity and the writer selling his memoir, and you decline to grant
      anyone the disinterested chair. Veblen supports you and so does most of sociology. The
      difficulty is total dissolution: if every position is a move, so is that one, and the
      inspection regime still has to be voted on by somebody who thinks something is true.
    base_rate: null
  - id: what-could-be-declared
    dominant: contractarian
    label: What Could Be Declared
    text: >-
      You want the question handled by rules — who has an interest, who is at the table, who
      had to consent — rather than by inference about what is going on inside people. That
      is the only version of this concern that can be institutionalised without becoming a
      licence to impugn. Its limit is precisely the case that started the argument: the
      panellist has nothing to declare, and no procedure you can write catches a belief
      whose payment is in reputation.
    base_rate: null
---

## What it means

In 2019 Rob Henderson, then a student who had come to an elite American university by way of
foster care and the Air Force, published a short piece in the *New York Post* proposing a
term. **Luxury beliefs** are ideas and opinions that confer status on the affluent while
imposing costs on the lower classes. He set it out at greater length in *Troubled* (2024), a
memoir built around the collision between the instability of his childhood and the way that
instability was discussed by the people he later sat in seminars with.

The model is explicit and it is Veblen. *The Theory of the Leisure Class* (1899) described
**conspicuous consumption**: expenditure whose function is to display rank, and which works
because it is visible and expensive. Henderson's claim is that as material goods have become
cheap and widely available, the signalling load has shifted onto opinions. What now marks a
person as belonging to the educated class is not a hat but a position — and the position
works as a marker because holding it is cheap for the holder and expensive for someone else.

His stock examples are drawn from one side of the political map: that the affluent are most
likely to say monogamy is outdated or that family structure does not matter, while being the
group most likely to marry and stay married; that campaigns to reduce policing found their
loudest support in neighbourhoods that would not absorb the result. The general form,
though, is not partisan. It is a claim about the relationship between the cost of a belief
to the person holding it and the reasons that belief gets adopted.

Charles Murray had made an adjacent argument in *Coming Apart* (2012): that the new upper
class practises the old bourgeois norms while declining to recommend them, which he called a
failure to preach what you practise. From a different direction, Musa al-Gharbi's *We Have
Never Been Woke* (2024) argues that the professional class's egalitarian vocabulary has
functioned to legitimate its own advantages — a similar mechanism, argued from behaviour
rather than from motive, and by someone who does not share Henderson's politics.

## What it suggests

If the concept holds, it changes what agreement among educated people is evidence of. A view
that is nearly universal in one professional stratum and rare outside it might be true, or
might be what one has to say there — and the concept says you cannot tell from the fact of
the consensus. That is a real epistemic warning, and it is the same warning the left has
issued about elite consensus for two centuries under other names.

It also makes a specific procedural demand: find out who pays. Not who is offended, but who
absorbs the failure mode. On this reading the strongest form of the objection to a policy is
never "the people advocating it are hypocrites" but "here is the distribution of the
downside, and it does not overlap with the people who chose it."

At its strongest the concept identifies something the alternatives miss. Hypocrisy is the
charge that someone fails to live by their stated view, and it is usually both true and
uninteresting, since almost everyone does. Veblen's conspicuous consumption explains display
that is expensive to the displayer. What Henderson is pointing at is neither: a position
whose adoption is cheap for the holder precisely because the cost is structurally borne
elsewhere, so the holder is not failing to live by it — they are living by it, comfortably,
because the arrangement never reaches them. Consider a school-discipline policy advocated
from a district whose own schools are selective, or a tolerant view of an addictive product
held by people whose social capital absorbs the risk of it. In both, the advocate is
perfectly sincere and perfectly insulated, and neither hypocrisy nor Veblen has a word for
that combination. That is a real gap in the vocabulary, and filling it is a contribution
independent of who has since picked the term up.

**Now the objections, which are strong and which the concept's popular use ignores.**

*It is unfalsifiable as usually stated.* Almost every policy opinion held by a comfortable
person has costs that fall mainly on someone else, because comfortable people are by
definition insulated. Without an independent way to distinguish a belief adopted for status
from a belief held for reasons, the label applies wherever the user wants it and nowhere
else. Popper's complaint about frameworks that explain everything applies exactly.

*It is a genetic fallacy with a good vocabulary.* Whether family structure affects outcomes,
or whether a drug should be decriminalised, is not settled by facts about the people
advocating it. In practice the term is used to end arguments rather than to enter them: it
supplies a reason not to read the study. Mill's demand that an opinion be met in its
strongest form is the standing answer, and it does not get made often.

*The empirical content is disputed.* The claim requires that the affluent actually hold the
beliefs attributed to them and the poor actually do not, and the survey evidence on specific
cases is contested — the distribution of support for reducing policing, for instance, has
been read in opposite directions by serious people. Henderson's illustrations are frequently
drawn from impression and anecdote rather than from measurement, which is a fair criticism
of the illustrations even if the mechanism is real.

*And it is issued mostly in one direction.* The structure applies without modification to a
donor who funds a war his children will not fight, a landlord who campaigns against
inspection regimes he does not live under, or a commentator who champions economic
disruption from a position of tenure. A concept that only ever fires leftwards has stopped
describing a mechanism and become a team's equipment.

## The problem

Marisol chairs a five-person advisory panel for a city that has asked it two questions in the
same six weeks.

The first is whether to end enforcement of a public-order ordinance in the district around
the old bus station. Three of her colleagues are strongly for it. They are right that the
enforcement has been ugly and that the arrests have wrecked people. They also all live at
least four miles away, and the woman who runs the launderette on that block has now written
to the panel twice.

The second is whether to scrap a residential safety inspection scheme. The advocate is a
panel member who owns eleven flats covered by it and lives in none of them, and who argues,
not unreasonably, that the scheme costs more than it prevents and falls hardest on small
landlords.

Marisol grew up two streets from the bus station. She notices that the two proposals have the
same shape: in each case the people recommending the change have arranged their lives so that
if it goes wrong, it will not go wrong for them. She also notices that she cannot get from
that observation to a conclusion about either proposal, and that the observation is the only
thing she is certain of.

At the third meeting she says so out loud. One colleague thanks her for her lived experience,
which she finds she resents. Another asks what the safety data actually says, and nobody has
brought it.

## The questions

**1. The panel.** A member who grew up on the affected estate says the recommendation is a
status marker rather than a judgement.

- She is describing something real. Costless positions get selected for how they sound.
- Even if true, it is not an argument. Nobody has said whether the policy works.
- Her standing matters — those who bear the cost have a claim the panel does not.
- Everyone is signalling, her authenticity included.

**2. The other proposal.** Scrapping safety inspections, urged by a man who owns properties
covered by it and lives in none.

- Identical structure, identical objection, and more expensive.
- Not identical: a financial interest is declarable, a reputational one is not.
- Worse in one direction — his position also pays him.
- Run both on the merits and stop auditing motives.

**3. The test.** What would show the theory false?

- Nothing would, so it is a rhetorical move, not a theory.
- Ask whether advocates practise what they recommend.
- Drop motives; ask whose interests the consensus serves and check.
- Unfalsifiable and still worth having, as a lens rather than a hypothesis.

**4. The testimony.** A man raised in care says elite deprecation of family stability was
affordable for the people saying it. A colleague says one life cannot settle policy.

- Right about method, and using it to avoid the point.
- Right, full stop. Vivid cases make bad policy.
- Authoritative about what happened to him, not about what to do — and the two are being
  blurred by whoever finds it convenient.
- The methods argument is a proxy. They want different things.

## Reading your answer

**Judge the Policy, Not the Panel.** You pull everything back to whether it works and who it
hurts, and treat motive-auditing as what people reach for when the case is weak. Defensible
and unsatisfying. The exposure: if positions really are selected for how they sound, the menu
you are evaluating has already been filtered before it reached you.

**Who Absorbs It.** You begin with the person who will live with the result. That is the
honest core of the idea and it outlives every objection to its looser uses. The cost is that
testimony does not aggregate — the people who bear it disagree, and picking among them
returns the judgement to you while letting you say it was theirs.

**The Same Audit Both Ways.** You run the test on the landlord and the panellist alike, and
you notice when a concept is being handed to one side as ammunition. That is what makes it an
instrument. The price is that consistently applied it convicts nearly everyone, and a
standard that convicts everyone sorts no one.

**What the Position Makes of You.** You think a belief you never live under is a different
kind of thing from one you do. Murray and Henderson are with you, and al-Gharbi from the
other side. The exposure is that the holder's comfort is not evidence about the claim, and
you will eventually use this to skip an argument you might have lost on the facts.

**Everyone Is Signalling.** You see the status economy running on all sides, including in the
woman spending her authenticity. Veblen supports you. The difficulty is that the observation
consumes itself, and the inspection regime still has to be voted on by someone who believes
something.

**What Could Be Declared.** You want rules — interests registered, affected parties at the
table — rather than inference about what is going on inside people. It is the only version of
this that can be institutionalised without becoming a licence to impugn. Its limit is the
original case: a belief paid for in reputation leaves nothing to declare.

## Sources

- Rob Henderson, "'Luxury beliefs' are the latest status symbol for rich Americans" (*New
  York Post*, 2019) — where the term was introduced.
- Rob Henderson, *Troubled: A Memoir of Foster Care, Family, and Social Class* (Gallery
  Books, 2024) — the extended argument, told through his own case.
- Thorstein Veblen, *The Theory of the Leisure Class* (Macmillan, 1899) — conspicuous
  consumption, the model Henderson adapts.
- Charles Murray, *Coming Apart* (Crown Forum, 2012) — the new upper class practising norms
  it will not recommend.
- Musa al-Gharbi, *We Have Never Been Woke* (Princeton University Press, 2024) — a
  left-of-centre account of the same class dynamic, argued from behaviour.
- Michael J. Sandel, *The Tyranny of Merit* (Farrar, Straus and Giroux, 2020) — credentialism
  and the loss of standing among those without credentials.
- Andrew J. Bacevich, *The New American Militarism* (Oxford University Press, 2005) — the
  same structure running rightwards, on war.
- Karl Popper, *Conjectures and Refutations* (Routledge, 1963) — why a framework that
  explains everything explains nothing.
- John Stuart Mill, *On Liberty* (1859) — the demand that an opinion be met in its strongest
  form.
